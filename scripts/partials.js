import {basename} from 'node:path/posix';

import {globbySync} from 'globby';

import {getDirectory} from './utilities.js';


function generatePartials(type, typeData, viewsPaths) {
	const files = globbySync([
		`${getDirectory(viewsPaths[0])}/${type}/**/*.pug`,
		...viewsPaths.slice(1),
	]);

	const result = {
		path: `../examples/${type}`,
		list: typeData || [],
	};


	for (const file of files) {
		const templateId = basename(file, '.pug');

		let template = result.list.find(({id}) => id === templateId);

		if (typeof template === 'undefined') {
			template = {
				id: templateId,
				name: templateId.replace(/(?:^|([\s_-]+))(\S)/g, (_, p1, p2) => (p1 ? ' ' : '') + p2.toUpperCase()),
				status: 'wip',
			};

			result.list.push(template);
		}
	}

	return result;
}


export default generatePartials;
