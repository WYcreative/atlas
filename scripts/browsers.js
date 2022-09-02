import browsersList from 'browserslist';


function generateBrowsers(queries) {
	const data = browsersList(queries);
	const result = {};

	for (const browser of data) {
		const pair = browser.split(' ');
		const identifier = pair[0];

		const selectedBrowser = Object.entries(browsersMap).find(([_, {identifiers}]) => identifiers.includes(identifier));

		const id = selectedBrowser[0];
		const {name, url} = selectedBrowser[1];
		const version = Math.min(
			...pair[1]
				.split('-')
				.map(version => Number.parseFloat(version)),
		) || undefined;

		if (name) {
			if (!result[id]) {
				result[id] = {
					name,
					url,
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
		url: 'https://play.google.com/store/apps/details?id=com.google.android.webview',
		identifiers: [
			'android',
		],
	},
	chrome: {
		name: 'Chrome',
		url: 'https://www.google.com/chrome/',
		identifiers: [
			'chrome',
			'chromeandroid',
			'and_chr',
		],
	},
	edge: {
		name: 'Edge',
		url: 'https://www.microsoft.com/edge',
		identifiers: [
			'edge',
		],
	},
	electron: {
		name: 'Electron',
		url: 'https://www.electronjs.org/',
		identifiers: [
			'electron',
		],
	},
	firefox: {
		name: 'Firefox',
		url: 'https://www.mozilla.org/firefox/',
		identifiers: [
			'firefox',
			'ff',
			'firefoxandroid',
			'and_ff',
		],
	},
	kaios: {
		name: 'KaiOS Browser',
		url: 'https://www.kaiostech.com/',
		identifiers: [
			'kaios',
		],
	},
	node: {
		name: 'Node.js',
		url: 'https://nodejs.org/',
		identifiers: [
			'node',
		],
	},
	opera: {
		name: 'Opera',
		url: 'https://www.opera.com/',
		identifiers: [
			'opera',
		],
	},
	operaMini: {
		name: 'Opera Mini',
		url: 'https://www.opera.com/browsers/opera-mini',
		identifiers: [
			'operamini',
			'op_mini',
		],
	},
	operaMobile: {
		name: 'Opera Mobile',
		url: 'https://www.opera.com/mobile',
		identifiers: [
			'op_mob',
		],
	},
	qq: {
		name: 'QQ Browser',
		url: 'https://browser.qq.com/',
		identifiers: [
			'and_qq',
		],
	},
	safari: {
		name: 'Safari',
		url: 'https://www.apple.com/safari/',
		identifiers: [
			'safari',
			'iOS',
			'ios_saf',
		],
	},
	samsung: {
		name: 'Samsung Internet',
		url: 'https://www.samsung.com/pt/apps/samsung-internet/',
		identifiers: [
			'samsung',
		],
	},
	uc: {
		name: 'UC Browser',
		url: 'http://www.ucweb.com/',
		identifiers: [
			'ucandroid',
			'and_uc',
		],
	},
};


export default generateBrowsers;
