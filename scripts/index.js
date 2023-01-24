import generateData from './data.js';
import generateFiles from './files.js';


function generateAtlas(options) {
	if (typeof options !== 'object') {
		throw new TypeError(`The argument 'options' is not an object. Got the ${typeof options} '${typeof options}'.`);
	}

	for (const property of ['package', 'config', 'atlas']) {
		if (typeof options[property] !== 'object') {
			throw new TypeError(`The property '${property}' is not an object. Got the ${typeof options[property]} '${options[property]}'.`);
		}
	}

	for (const path of ['components', 'modules', 'templates']) {
		if (['string', 'undefined'].includes(typeof options[path]) === false) {
			throw new TypeError(`The property '${path}' is not a string. Got the ${typeof options[path]} '${options[path]}'.`);
		}
	}

	for (const path of ['components', 'modules', 'templates']) {
		if (typeof options[path] === 'undefined') {
			options[path] = path;
		}
	}

	const data = generateData(options);

	generateFiles(data, options);
}

export default generateAtlas;
