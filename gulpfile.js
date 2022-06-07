import gulp from 'gulp';

import * as styles from './gulp/styles.js';
import * as fonts from './gulp/fonts.js';
import * as images from './gulp/images.js';
import * as scripts from './gulp/scripts.js';
import * as views from './gulp/views.js';
import * as browser from './gulp/browser.js';
import * as watch from './gulp/watch.js';

const {series, parallel} = gulp;

export default series(
	parallel(
		styles.build,
		fonts.build,
		images.build,
		scripts.build,
		views.build,
	),
	browser.build,
	watch.build,
);
