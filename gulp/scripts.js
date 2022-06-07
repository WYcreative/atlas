import gulp from 'gulp';
import plumber from 'gulp-plumber';
import babel from 'gulp-babel';

import config from '../config/index.js';

const {src, dest} = gulp;

function build() {
	return src(config.src.scripts)
		.pipe(plumber())
		.pipe(babel())
		.pipe(dest(config.build.scripts));
}

build.displayName = 'scripts:build';

export {
	build,
};
