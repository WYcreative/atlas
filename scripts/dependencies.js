function generateDependencies(dependencies) {
	const result = {};

	for (const [name, version] of Object.entries(dependencies)) {
		// REVIEW: Get this information from the packages/registries instead.
		const url = `https://www.npmjs.com/package/${name}`;

		result[name] = {
			name,
			url,
			version,
		};
	}

	return result;
}


export default generateDependencies;
