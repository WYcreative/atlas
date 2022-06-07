import browserSync from 'browser-sync';

import config from '../config/index.js';

const browserSyncInstance = browserSync.create(config.name);

function build(done) {
	browserSyncInstance.init({
		server: config.build.base,
	});

	done();
}

function reload(done) {
	browserSyncInstance.reload();

	done();
}

export {
	build,
	reload,
};
