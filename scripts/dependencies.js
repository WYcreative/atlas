function generateDependencies(dependencies) {
	const result = {};

	for (const [name, version] of Object.entries(dependencies)) {
		let url;

		// REVIEW: Get this information from the packages/registries instead.
		if (name.startsWith('@wycreative')) {
			const unscopedPackage = name.split('/')[1];
			url = `https://github.com/WYcreative/${unscopedPackage}/pkgs/npm/${unscopedPackage}`;
		} else {
			url = `https://www.npmjs.com/package/${name}`;
		}

		result[name] = {
			name,
			url,
			version,
		};
	}

	return result;
}

export default generateDependencies;
