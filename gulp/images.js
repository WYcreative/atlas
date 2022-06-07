import gulp from 'gulp';
import plumber from 'gulp-plumber';
import imagemin from 'gulp-imagemin';

import config from '../config/index.js';

const {src, dest} = gulp;

function build() {
	return src(config.src.images)
		.pipe(plumber())
		.pipe(imagemin())
		.pipe(dest(config.build.images));
}

build.displayName = 'images:build';

export {
	build,
};
