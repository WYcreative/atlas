import generateBrowsers from './browsers.js';
import generateEnvironments from './environments.js';
import generateDependencies from './dependencies.js';
import generatePartials from './partials.js';


function generateData(options) {
	const data = {
		...options.atlas,
		version: options.package.version,
		lastUpdate: new Date(),
		browsers: generateBrowsers(options.package.browserslist),
		environments: generateEnvironments(options.package.engines),
		dependencies: generateDependencies(options.package.dependencies || {}),
	};

	if (!data.description && options.package.description) {
		data.description = options.package.description;
	}

	if (data.tokens === undefined) {
		data.tokens = {};
	}

	if (options.paths.symbols.length > 0) {
		data.tokens.icons = options.paths.symbols;
	} else {
		delete data.tokens?.icons;
	}

	for (const type of ['components', 'modules', 'templates']) {
		if (data[type] === undefined) {
			data[type] = [];
		}

		data[type] = generatePartials(type, data, options);
	}

	return data;
}


export default generateData;
