import {basename, dirname, join} from 'node:path/posix';

import {globbySync} from 'globby';

import {getDirectory} from './utilities.js';


function generateIcons(symbolsPath) {
	const icons = globbySync('**/*.svg', {
		cwd: getDirectory(symbolsPath),
	});

	const result = [];

	for (const icon of icons) {
		const id = basename(icon, '.svg');

		let path = dirname(dirname(icon));
		let name = basename(dirname(icon));

		path = path === '.' ? '' : path;
		name = name === '.' ? basename(getDirectory(symbolsPath)) : name;

		if (typeof result.find(file => file.path === path && file.name === name) === 'undefined') {
			result.push({
				name,
				path,
				file: join(path, `${name}.svg`),
				list: [],
			});
		}

		const fileIndex = result.findIndex(file => file.path === path && file.name === name);

		result[fileIndex].list.push(id);
	}

	return result;
}


export default generateIcons;
