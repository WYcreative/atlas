import {fileURLToPath} from 'node:url';
import {resolve, relative, join, dirname} from 'node:path';
import {existsSync, mkdirSync, readFileSync, writeFileSync} from 'node:fs';

import {globbySync} from 'globby';
import pug from 'pug';
import {parse as markdown, use as markdownUse} from 'marked';

import config from '../config/index.js';

import {getDirectory} from './utilities.js';


markdownUse({
	mangle: false,
	headerIds: false,
});


function generateFiles(data, options) {
	const __dirname = fileURLToPath(new URL('.', import.meta.url));
	const destination = resolve(options.paths.destination);
	const pagesDirectory = resolve(__dirname, '..', getDirectory(config.src.views[0]), 'pages');
	const distDirectory = resolve(__dirname, '../dist');
	const pugOptions = {
		relative,
		join,
		markdown,
		data,
		paths: options.paths,
	};

	if (!existsSync(destination)) {
		mkdirSync(destination, {
			recursive: true,
		});
	}


	const assets = globbySync('assets/**', {
		cwd: distDirectory,
	});

	for (const asset of assets) {
		if (!existsSync(join(destination, dirname(asset)))) {
			mkdirSync(join(destination, dirname(asset)), {
				recursive: true,
			});
		}

		writeFileSync(join(destination, asset), readFileSync(join(distDirectory, asset)));
	}


	const overview = pug.renderFile(join(pagesDirectory, 'overview.pug'), pugOptions);

	writeFileSync(join(destination, 'index.html'), overview);


	if (!existsSync(join(destination, 'tokens'))) {
		mkdirSync(join(destination, 'tokens'), {
			recursive: true,
		});
	}

	const tokensIndexResult = pug.renderFile(join(pagesDirectory, 'tokens.pug'), pugOptions);

	writeFileSync(join(destination, 'tokens/index.html'), tokensIndexResult);

	for (const type of Object.keys(data.tokens)) {
		const result = pug.renderFile(join(pagesDirectory, `${type}.pug`), pugOptions);

		writeFileSync(join(destination, 'tokens', `${type}.html`), result);
	}


	for (const type of ['component', 'module', 'template']) {
		if (data[`${type}s`]?.list?.length > 0) {
			if (!existsSync(join(destination, `${type}s`))) {
				mkdirSync(join(destination, `${type}s`), {
					recursive: true,
				});
			}

			const indexResult = pug.renderFile(join(pagesDirectory, `${type}s.pug`), pugOptions);

			writeFileSync(join(destination, `${type}s/index.html`), indexResult);

			const template = pug.compileFile(join(pagesDirectory, `${type}.pug`));

			for (const object of data[`${type}s`].list) {
				const result = template({
					...pugOptions,
					current: object.id,
				});

				writeFileSync(join(destination, `${type}s`, `${object.id}.html`), result);
			}
		}
	}
}


export default generateFiles;
