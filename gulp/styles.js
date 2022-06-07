import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import postcss from 'gulp-postcss';
import presetEnv from 'postcss-preset-env';

import config from '../config/index.js';

const {src, dest} = gulp;
const sass = gulpSass(dartSass);

function build() {
	return src(config.src.styles)
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss([
			presetEnv(),
		]))
		.pipe(dest(config.build.styles));
}

build.displayName = 'styles:build';

export {
	build,
};
