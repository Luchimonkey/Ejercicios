const members=data.results[0].members
let republicans=0
let independents=0
let democrats=0
let republicansVotes=0
let independentsVotes=0
let democratsVotes=0

members.forEach(member =>{
	if(member.party=="R"){
		republicans=republicans+1
		republicansVotes+=member.votes_with_party_pct
	}
	if(member.party=="I"){
		independents=independents+1
		independentsVotes+=member.votes_with_party_pct
	}
	if(member.party=="D"){
		democrats=democrats+1
		democratsVotes+=member.votes_with_party_pct
	}

	let total=democrats+republicans+independents
	let republicansPercentage=parseFloat(republicansVotes/republicans).toFixed(2)
	let independentsPercentage=parseFloat(independentsVotes/independents).toFixed(2)
	let democratsPercentage=parseFloat(democratsVotes/democrats).toFixed(2)

	if(republicans==0){
		republicansPercentage="00.00"
	}
	if(independents==0){
		independentsPercentage="00.00"
	}
	if(democrats==0){
		democratsPercentage="00.00"
	}

	document.getElementById("table1").innerHTML = '<tr>' + '<td>' + 'Democrats' + '</td>' + '<td>' + democrats + '</td>' + '<td>' + democratsPercentage + '%' + '</td>' + '</tr>' + '<tr>' + '<td>' + 'Republicans' + '</td>' + '<td>' + republicans + '</td>' + '<td>' + republicansPercentage + '%' + '</td>' + '</tr>' + '<tr>' + '<td>' + 'Independents' + '</td>' + '<td>' + independents + '</td>' + '<td>' + independentsPercentage + '%' + '</td>' + '</tr>' + '<tr>' + '<td>' + 'Total' + '</td>' + '<td colspan="2">' + total + '</td>' + '</tr>'
})

let membersOrd = members.sort(function(a,b){
	if(a.missed_votes_pct > b.missed_votes_pct){
		return 1
	}
	if(a.missed_votes_pct < b.missed_votes_pct){
		return -1
	}
	return 0
})


let leastEngaged = []
let tenPercent = (membersOrd.length * 0.10).toFixed(0)
let filter = membersOrd[tenPercent].missed_votes_pct
membersOrd.filter(element => element.missed_votes_pct<=filter && element.missed_votes_pct != 0).forEach(e =>{
	leastEngaged.push(e)
})
console.log(leastEngaged)
leastEngaged.forEach(missed =>{
	let nombreFull = missed.first_name + " " + (missed.middle_name || " ") + " " + missed.last_name
	document.getElementById("table2").innerHTML += `<tr><td>${nombreFull}</td><td>${missed.missed_votes}</td><td>${missed.missed_votes_pct}%</td></tr>`
})