import {resolve, basename} from 'node:path/posix';

import {globbySync} from 'globby';
import getMember from '@WYcreative/team';

import generateBrowsers from './browsers.js';
import generateEnvironments from './environments.js';
import {getDirectory} from './utilities.js';


function generateData(options) {
	const data = {
		...options.guide,
		version: options.package.version,
		lastUpdate: new Date(),
		browsers: generateBrowsers(options.package.browserslist),
		environments: generateEnvironments(options.package.engines),
		dependencies: options.package.dependencies,
	};

	if (!data.description && options.package.description) {
		data.description = options.package.description;
	}

	data.team = [];

	for (const email of options.guide.team) {
		const memberData = getMember(email);

		if (memberData) {
			const {team} = memberData;

			delete memberData.team;

			if (typeof data.team.find(group => group.name === team) === 'undefined') {
				data.team.push({
					name: team,
					list: [],
				});
			}

			const teamIndex = data.team.findIndex(group => group.name === team);

			data.team[teamIndex].list.push(memberData);
		} else {
			console.error(`No team member found for the email '${email}'.`);
		}
	}

	for (const type of ['components', 'modules', 'templates']) {
		const files = globbySync([
			`${getDirectory(options.config.src.views[0])}/${type}/**/*.pug`,
			...options.config.src.views.slice(1),
		]);

		data[type] = {
			path: '',
			list: [],
		};

		for (const file of files) {
			const templateId = basename(file, '.pug');

			let template = options.guide[type].find(({id}) => id === templateId);

			if (typeof template === 'undefined') {
				template = {
					id: templateId,
					name: templateId.replace(/(?:^|([\s_-]+))(\S)/g, (_, p1, p2) => (p1 ? ' ' : '') + p2.toUpperCase()),
					status: 'wip',
				};
			}

			data[type].list.push(template);
		}
	}

	return data;
}


export default generateData;
