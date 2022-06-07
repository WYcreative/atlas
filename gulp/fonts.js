import gulp from 'gulp';

import config from '../config/index.js';

const {src, dest} = gulp;

function build() {
	return src(config.src.fonts)
		.pipe(dest(config.build.fonts));
}

build.displayName = 'fonts:build';

export {
	build,
};
