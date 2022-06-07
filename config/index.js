import pkg from '../package.json' assert {type: 'json'};

const src = {};
const build = {};

src.base = './src/';

build.base = './build/';

const config = {
	name: pkg.name,
	src: {
		styles: `${src.base}styles/**/*.s+(a|c)ss`,
		fonts: `${src.base}fonts/**/*.woff2`,
		images: `${src.base}images/**/*.{png,jpg,jpeg,svg}`,
		scripts: `${src.base}scripts/**/*.js`,
		views: `${src.base}views/**/*.pug`,
	},
	build: {
		base: build.base,
		styles: `${build.base}styles/`,
		fonts: `${build.base}fonts/`,
		images: `${build.base}images/`,
		scripts: `${build.base}scripts/`,
		views: build.base,
	},
};

export default config;
