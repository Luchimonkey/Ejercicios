const members=data.results[0].members.filter(j => j.total_votes !=0)
let republicans=0
let independents=0
let democrats=0
let republicansVotes=0
let independentsVotes=0
let democratsVotes=0

//-----table1-----
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



//-----table2-----
let membersOrdLeast = members.sort(function(a,b){
	if(a.missed_votes_pct < b.missed_votes_pct){
		return 1
	}
	if(a.missed_votes_pct > b.missed_votes_pct){
		return -1
	}
	return 0
})

let leastEngaged = []
let tenPercent1 = (membersOrdLeast.length*0.10).toFixed(0)
let filterLeast = membersOrdLeast[tenPercent1].missed_votes_pct
membersOrdLeast.filter(element => element.missed_votes_pct>=filterLeast).forEach(e =>{
	leastEngaged.push(e)
})
leastEngaged.forEach(missed=>{
	let nombreFull = missed.first_name + " " + (missed.middle_name || " ") + " " + missed.last_name
	if(document.getElementById("table2")){
		document.getElementById("table2").innerHTML += `<tr><td>${nombreFull}</td><td>${missed.missed_votes}</td><td>${missed.missed_votes_pct}%</td></tr>`
	}
})
//-----table4-----
let membersOrdLeastLoyal = members.sort(function (a,b){
	if(a.votes_with_party_pct > b.votes_with_party_pct){
		return 1
	}
	if(a.votes_with_party_pct < b.votes_with_party_pct){
		return -1
	}
	return 0
})
leastLoyal = []
let filterleastLoyal = membersOrdLeastLoyal[tenPercent1].votes_with_party_pct
membersOrdLeastLoyal.filter(element => element.votes_with_party_pct<=filterleastLoyal).forEach(e =>{
	leastLoyal.push(e)
})
leastLoyal.forEach(ll =>{
	let nombreFull = ll.first_name + " " + (ll.middle_name || " ") + " " + ll.last_name
	let partyVotes = ((ll.votes_with_party_pct/100)*ll.total_votes).toFixed(0)
	if(document.getElementById("table4")){
		document.getElementById("table4").innerHTML += `<tr><td>${nombreFull}</td><td>${partyVotes}</td><td>${ll.votes_with_party_pct}%</td></tr>`
	}
})




//-----table3-----
let membersOrd = members.sort(function(a,b){
	if(a.missed_votes_pct > b.missed_votes_pct){
		return 1
	}
	if(a.missed_votes_pct < b.missed_votes_pct){
		return -1
	}
	return 0
})

let mostEngaged = []
let tenPercent = (membersOrd.length * 0.10).toFixed(0)
let filter = membersOrd[tenPercent].missed_votes_pct
membersOrd.filter(element => element.missed_votes_pct<=filter).forEach(e =>{
	mostEngaged.push(e)
})
mostEngaged.forEach(missed =>{
	let nombreFull = missed.first_name + " " + (missed.middle_name || " ") + " " + missed.last_name
	if(document.getElementById("table3")){
		document.getElementById("table3").innerHTML += `<tr><td>${nombreFull}</td><td>${missed.missed_votes}</td><td>${missed.missed_votes_pct}%</td></tr>`
	}
})
//-----table5-----
let membersOrdMostLoyal = members.sort(function (a,b){
	if(a.votes_with_party_pct < b.votes_with_party_pct){
		return 1
	}
	if(a.votes_with_party_pct > b.votes_with_party_pct){
		return -1
	}
	return 0
})
mostLoyal = []
let filterMostLoyal = membersOrdMostLoyal[tenPercent].votes_with_party_pct
membersOrdMostLoyal.filter(element => element.votes_with_party_pct>=filterMostLoyal).forEach(e =>{
	mostLoyal.push(e)
})
mostLoyal.forEach(ll =>{
	let nombreFull = ll.first_name + " " + (ll.middle_name || " ") + " " + ll.last_name
	let partyVotes = ((ll.votes_with_party_pct/100)*ll.total_votes).toFixed(0)
	if(document.getElementById("table5")){
		document.getElementById("table5").innerHTML += `<tr><td>${nombreFull}</td><td>${partyVotes}</td><td>${ll.votes_with_party_pct}%</td></tr>`
	}
})
