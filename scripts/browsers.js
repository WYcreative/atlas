import browsersList from 'browserslist';


function generateBrowsers(queries) {
	const data = browsersList(queries);
	const result = {};

	for (const browser of data) {
		const pair = browser.split(' ');
		const identifier = pair[0];

		const selectedBrowser = Object.entries(browsersMap).find(([_, {identifiers}]) => identifiers.includes(identifier));

		const id = selectedBrowser[0];
		const {name} = selectedBrowser[1];
		const version = Math.min(
			...pair[1]
				.split('-')
				.map(version => Number.parseFloat(version)),
		) || undefined;

		if (name) {
			if (!result[id]) {
				result[id] = {
					name,
				};
			}

			if (version && (!result[id].version || version < result[id].version)) {
				result[id].version = version;
			}
		} else {
			console.error(`No browser name found for the '${identifier}' identifier.`);
		}
	}

	return result;
}


const browsersMap = {
	android: {
		name: 'Android (WebView)',
		identifiers: [
			'android',
		],
	},
	chrome: {
		name: 'Chrome',
		identifiers: [
			'chrome',
			'chromeandroid',
			'and_chr',
		],
	},
	edge: {
		name: 'Edge',
		identifiers: [
			'edge',
		],
	},
	electron: {
		name: 'Electron',
		identifiers: [
			'electron',
		],
	},
	firefox: {
		name: 'Firefox',
		identifiers: [
			'firefox',
			'ff',
			'firefoxandroid',
			'and_ff',
		],
	},
	kaios: {
		name: 'KaiOS Browser',
		identifiers: [
			'kaios',
		],
	},
	node: {
		name: 'Node.js',
		identifiers: [
			'node',
		],
	},
	opera: {
		name: 'Opera',
		identifiers: [
			'opera',
		],
	},
	operaMini: {
		name: 'Opera Mini',
		identifiers: [
			'operamini',
			'op_mini',
		],
	},
	operaMobile: {
		name: 'Opera Mobile',
		identifiers: [
			'op_mob',
		],
	},
	qq: {
		name: 'QQ Browser',
		identifiers: [
			'and_qq',
		],
	},
	safari: {
		name: 'Safari',
		identifiers: [
			'safari',
			'iOS',
			'ios_saf',
		],
	},
	samsung: {
		name: 'Samsung Internet',
		identifiers: [
			'samsung',
		],
	},
	uc: {
		name: 'UC Browser',
		identifiers: [
			'ucandroid',
			'and_uc',
		],
	},
};


export default generateBrowsers;
