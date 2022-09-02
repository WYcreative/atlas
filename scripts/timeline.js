function generateTimeline(timeline) {
	const result = {};

	for (let [stageName, intervals] of Object.entries(timeline)) {
		if (stageName.startsWith('pre')) {
			stageName = 'Pre-' + stageName.slice(3, 4).toUpperCase() + stageName.slice(4);
		}

		if (stageName.endsWith('end')) {
			stageName = stageName.slice(0, -3) + '-End';
		}

		stageName = stageName.slice(0, 1).toUpperCase() + stageName.slice(1);

		result[stageName] = {};

		for (const [intervalName, date] of Object.entries(intervals)) {
			result[stageName][intervalName] = new Date(date);
		}
	}

	return result;
}


export default generateTimeline;
