// for (i=0; i<data.results[0].members.length; i+){
// 	document.getElementById("tablebody").innerHTML = '<tr>' + '<td>' + data.results[0].members[i].first_name + '</td>' + '</tr>'
// }

const members = data.results[0].members
members.forEach(member => {
	// if(member.middle_name==null){
	// 	member.middle_name = " "
	// }
	// else{
	// 	member.middle_name = " " + member.middle_name + " "
	// }
	if(member.url==""){
		member.url="null"
	}
	document.getElementById("tablebody").innerHTML += '<tr>' + '<td>' + '<a href="' + member.url + '">' + member.first_name + " " + (member.middle_name || " ") + " " + member.last_name + '</a>' + '</td>' + '<td>' + member.party + '</td>' + '<td>' + member.state + '</td>' + '<td>' + member.seniority + '</td>' + '<td>' + "% " + member.votes_with_party_pct + '</td>' + '</tr>'
})