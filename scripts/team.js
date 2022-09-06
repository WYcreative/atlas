import getMember from '@WYcreative/team';


function generateTeam(team) {
	const result = [];

	team.sort();

	for (const email of team) {
		const memberData = getMember(email);

		if (memberData) {
			const {team} = memberData;

			// Create a detatched object, since `delete` also changes the original reference of the package.
			const member = {...memberData};

			delete member.team;

			if (typeof result.find(group => group.name === team) === 'undefined') {
				result.push({
					name: team,
					list: [],
				});
			}

			const teamIndex = result.findIndex(group => group.name === team);

			result[teamIndex].list.push(member);
		} else {
			throw new Error(`No team member found for the email '${email}'.`);
		}
	}

	result.sort((a, b) => a.name < b.name ? -1 : 1);

	return result;
}


export default generateTeam;
