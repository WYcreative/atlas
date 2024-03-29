import gulp from 'gulp';

import clean from './gulp/clean.js';
import * as styles from './gulp/styles.js';
import * as fonts from './gulp/fonts.js';
import * as symbols from './gulp/symbols.js';
import * as images from './gulp/images.js';
import * as scripts from './gulp/scripts.js';
import * as views from './gulp/views.js';
import * as libs from './gulp/libs.js';
import * as browser from './gulp/browser.js';
import * as watch from './gulp/watch.js';


const {series, parallel} = gulp;


const build = parallel(
	styles.build,
	fonts.build,
	symbols.build,
	images.build,
	scripts.build,
	libs.build,
	views.build,
);


export default series(
	clean,
	build,
	browser.build,
	watch.build,
);


export const serve = series(
	browser.build,
	watch.build,
);


export const dist = parallel(
	styles.dist,
	fonts.dist,
	images.dist,
	scripts.dist,
	libs.dist,
);


export const deploy = series(
	clean,
	build,
	dist,
);


export {default as clean} from './gulp/clean.js';
