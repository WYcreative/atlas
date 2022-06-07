import gulp from 'gulp';

import config from '../config/index.js';
import * as styles from './styles.js';
import * as fonts from './fonts.js';
import * as images from './images.js';
import * as scripts from './scripts.js';
import * as views from './views.js';
import {reload} from './browser.js';

const {watch, series} = gulp;

function build(done) {
	watch(config.src.styles, series(styles.build, reload));
	watch(config.src.fonts, series(fonts.build, reload));
	watch(config.src.images, series(images.build, reload));
	watch(config.src.scripts, series(scripts.build, reload));
	watch(config.src.views, series(views.build, reload));

	done();
}

export {
	build,
};
