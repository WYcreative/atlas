import {createRequire} from 'node:module';

// TODO [2022-10-25]: Use import assertions once they become stable, assuming they will be when Node 18 enters LTS mode.
const pkg = createRequire(import.meta.url)('../package.json');

const src = './src/';
const build = './build/';
const dist = './dist/';


const config = {
	name: pkg.name,
	src: {
		styles: `${src}styles/**/*.s+(a|c)ss`,
		fonts: `${src}fonts/**/*.woff2`,
		symbols: `${src}symbols/**/*.svg`,
		images: `${src}images/**/*.{png,jpg,jpeg,gif,svg}`,
		scripts: `${src}scripts/**/*.js`,
		views: `${src}views/**/*.pug`,
	},
	build: {
		base: build,
		styles: `${build}assets/styles/**/*.css`,
		fonts: `${build}assets/fonts/**/*.woff2`,
		images: `${build}assets/images/**/*.{png,jpg,jpeg,gif,svg}`,
		scripts: `${build}assets/scripts/**/*.js`,
		libs: `${build}assets/libs/**`,
		views: `${build}**/*.html`,
	},
	dist: {
		base: dist,
		styles: `${dist}assets/styles/**/*.css`,
		fonts: `${dist}assets/fonts/**/*.woff2`,
		images: `${dist}assets/images/**/*.{png,jpg,jpeg,gif,svg}`,
		scripts: `${dist}assets/scripts/**/*.js`,
		libs: `${dist}assets/libs/**`,
		views: `${dist}**/*.html`,
	},
	libs: {
	}
};


export default config;
