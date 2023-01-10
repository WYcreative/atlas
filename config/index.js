import {createRequire} from 'node:module';
import {join} from 'node:path/posix';


// TODO: Use import assertions once they become stable.
const pkg = createRequire(import.meta.url)('../package.json');

const src = './src';
const build = './build';
const dist = './dist';

const config = {
	name: pkg.name,
	src: {
		styles: join(src, 'styles/**/*.s@(a|c)ss'),
		fonts: join(src, 'fonts/**/*.{woff?(2),@(o|t)tf}'),
		symbols: join(src, 'symbols/**/*.svg'),
		images: join(src, 'images/**/*.{png,jp?(e)g,gif,svg}'),
		scripts: join(src, 'scripts/**/*.js'),
		views: [
			join(src, 'views/**/*.pug'),
			'!**/_*/**',
			'!**/_*',
		],
	},
	build: {
		base: build,
		styles: join(build, 'assets/styles/**/*.css'),
		fonts: join(build, 'assets/fonts/**/*.{woff?(2),@(o|t)tf}'),
		images: join(build, 'assets/images/**/*.{png,jp?(e)g,gif,svg}'),
		scripts: join(build, 'assets/scripts/**/*.js'),
		libs: join(build, 'assets/libs/**'),
	},
	dist: {
		base: dist,
		styles: join(dist, 'assets/styles/**/*.css'),
		fonts: join(dist, 'assets/fonts/**/*.{woff?(2),@(o|t)tf}'),
		images: join(dist, 'assets/images/**/*.{png,jp?(e)g,gif,svg}'),
		scripts: join(dist, 'assets/scripts/**/*.js'),
		libs: join(dist, 'assets/libs/**'),
	},
};


export default config;
