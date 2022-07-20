function generateEnvironments(environments) {
	const result = {};

	for (const [name, version] of Object.entries(environments)) {
		result[name] = {
			...environmentsMap[name],
			version,
		};
	}

	return result;
}


const environmentsMap = {
	node: {
		name: 'Node.js',
		url: 'https://nodejs.org/en/',
	},
	npm: {
		name: 'npm',
		url: 'https://www.npmjs.com/',
	},
};


export default generateEnvironments;
