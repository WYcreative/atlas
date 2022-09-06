import {basename} from 'node:path/posix';

import {globbySync} from 'globby';

import {getDirectory} from './utilities.js';


function generatePartials(type, data, viewsPaths) {
	const files = globbySync([
		`${getDirectory(viewsPaths[0])}/${type}/**/*.pug`,
		...viewsPaths.slice(1),
	]);

	for (const {id} of data[type]) {
		if (files.some(file => basename(file, '.pug') === id) === false) {
			throw new Error(`No file found for the ${type.slice(0, -1)} '${id}'.`);
		}
	}

	const result = {
		path: `../examples/${type}`,
		list: data[type] || [],
	};

	const dependencyTypes = {
		modules: 'components',
		templates: 'modules',
	};

	for (const file of files) {
		const itemId = basename(file, '.pug');
		const dependencyType = dependencyTypes[type];

		let item = result.list.find(({id}) => id === itemId);

		if (typeof item === 'undefined') {
			item = {
				id: itemId,
				name: itemId.replace(/(?:^|([\s_-]+))(\S)/g, (_, p1, p2) => (p1 ? ' ' : '') + p2.toUpperCase()),
				status: 'wip',
			};

			result.list.push(item);
		} else if (dependencyType && item[dependencyType]) {
			for (const id of item[dependencyType]) {
				if (data[dependencyType].list.some(item => item.id === id) === false) {
					throw new Error(`No ${dependencyType.slice(0, -1)} '${id}' found, referenced in ${type.slice(0, -1)} '${item.id}'.`);
				}
			}
		}
	}

	return result;
}


export default generatePartials;
