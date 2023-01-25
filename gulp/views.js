import {createRequire} from 'node:module';

import config from '../config/index.js';
import generateAtlas from '../scripts/index.js';


// TODO: Use import assertions once they become stable.
const pkg = createRequire(import.meta.url)('../package.json');


async function build(done) {
	const {default: atlas} = await import(`../tests/atlas.js?t=${Date.now()}`);

	try {
		generateAtlas({
			package: pkg,
			atlas,
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
		console.error(' Skipping the generation of Atlas:\n', error);
	}

	done();
}


build.displayName = 'views:build';

export {
	build,
};
