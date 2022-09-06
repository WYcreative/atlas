import {createRequire} from 'node:module';

import config from '../config/index.js';
import guide from '../tests/guide.js';
import generateGuide from '../scripts/index.js';


// TODO [2022-10-25]: Use import assertions once they become stable, assuming they will be when Node 18 enters LTS mode.
const pkg = createRequire(import.meta.url)('../package.json');


function build(done) {
	try {
		generateGuide({
			package: pkg,
			guide,
			config: {
				src: {
					views: [
						'./tests/views/**/*.pug',
						...config.src.views.slice(1),
					],
					symbols: './tests/symbols/**/*.svg',
				},
				build: {
					base: './build',
					images: './build/assets/images/**',
					views: './build/**',
				},
			},
		});
	} catch (error) {
		console.error(' Skipping the generation of the Design Guide:\n', error);
	}

	done();
}


build.displayName = 'views:build';

export {
	build,
};
