import getMember from '@WYcreative/team';


function generateTeam(team) {
	const result = [];

	for (const email of team) {
		const memberData = getMember(email);

		if (memberData) {
			const {team} = memberData;

			delete memberData.team;

			if (typeof result.find(group => group.name === team) === 'undefined') {
				result.push({
					name: team,
					list: [],
				});
			}

			const teamIndex = result.findIndex(group => group.name === team);

			result[teamIndex].list.push(memberData);
		} else {
			console.error(`No team member found for the email '${email}'.`);
		}
	}

	return result;
}


export default generateTeam;
