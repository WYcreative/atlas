import {basename, dirname, join} from 'node:path/posix';

import {globbySync} from 'globby';
import getMember from '@WYcreative/team';

import generateBrowsers from './browsers.js';
import generateEnvironments from './environments.js';
import generateDependencies from './dependencies.js';
import {getDirectory} from './utilities.js';


function generateData(options) {
	const data = {
		...options.guide,
		version: options.package.version,
		lastUpdate: new Date(),
		browsers: generateBrowsers(options.package.browserslist),
		environments: generateEnvironments(options.package.engines),
		dependencies: generateDependencies(options.package.dependencies),
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

	const timeline = {};

	for (let [stageName, intervals] of Object.entries(data.timeline)) {
		if (stageName.startsWith('pre')) {
			stageName = 'Pre-' + stageName.slice(3, 4).toUpperCase() + stageName.slice(4);
		}

		if (stageName.endsWith('end')) {
			stageName = stageName.slice(0, -3) + '-End';
		}

		stageName = stageName.slice(0, 1).toUpperCase() + stageName.slice(1);

		timeline[stageName] = {};

		for (const [intervalName, date] of Object.entries(intervals)) {
			timeline[stageName][intervalName] = new Date(date);
		}
	}

	data.timeline = timeline;

	const icons = globbySync('**/*.svg', {
		cwd: getDirectory(options.config.src.symbols),
	});

	if (icons.length > 0) {
		if (typeof data.tokens === 'undefined') {
			data.tokens = {};
		}

		data.tokens.icons = [];
	} else {
		delete data.tokens?.icons;
	}

	for (const icon of icons) {
		const id = basename(icon, '.svg');

		let path = dirname(dirname(icon));
		let name = basename(dirname(icon));

		path = path === '.' ? '' : path;
		name = name === '.' ? basename(getDirectory(options.config.src.symbols)) : name;

		if (typeof data.tokens.icons.find(file => file.path === path && file.name === name) === 'undefined') {
			data.tokens.icons.push({
				name,
				path,
				file: join(path, `${name}.svg`),
				list: [],
			});
		}

		const fileIndex = data.tokens.icons.findIndex(file => file.path === path && file.name === name);
		data.tokens.icons[fileIndex].list.push(id);
	}

	for (const type of ['components', 'modules', 'templates']) {
		const files = globbySync([
			`${getDirectory(options.config.src.views[0])}/${type}/**/*.pug`,
			...options.config.src.views.slice(1),
		]);

		data[type] = {
			path: `../examples/${type}`,
			list: options.guide[type] || [],
		};

		for (const file of files) {
			const templateId = basename(file, '.pug');

			let template = data[type].list.find(({id}) => id === templateId);

			if (typeof template === 'undefined') {
				template = {
					id: templateId,
					name: templateId.replace(/(?:^|([\s_-]+))(\S)/g, (_, p1, p2) => (p1 ? ' ' : '') + p2.toUpperCase()),
					status: 'wip',
				};

				data[type].list.push(template);
			}
		}
	}

	return data;
}


export default generateData;
