import gulp from 'gulp';
import plumber from 'gulp-plumber';
import pug from 'gulp-pug';

import config from '../config/index.js';

const {src, dest} = gulp;

function build() {
	return src(config.src.views)
		.pipe(plumber())
		.pipe(pug({
			pretty: true,
		}))
		.pipe(dest(config.build.views));
}

build.displayName = 'views:build';

export {
	build,
};
