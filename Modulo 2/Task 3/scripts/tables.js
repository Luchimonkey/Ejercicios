const members=data.results[0].members.filter(j => j.total_votes !=0)

let estadisticas = {

	republicans:0,
	independents:0,
	democrats:0,
	republicansVotes:0,
	independentsVotes:0,
	democratsVotes:0,
	total:data.results[0].num_results,
	totalPorcentaje:0,
	leastEngaged : [],
	leastLoyal : [],
	mostEngaged : [],
	mostLoyal : [],

}

//-----table1-----
members.forEach(member =>{
	if(member.party=="R"){
		estadisticas.republicans++
		estadisticas.republicansVotes+=member.votes_with_party_pct
	}
	if(member.party=="I"){
		estadisticas.independents++
		estadisticas.independentsVotes+=member.votes_with_party_pct
	}
	if(member.party=="D"){
		estadisticas.democrats++
		estadisticas.democratsVotes+=member.votes_with_party_pct
	}

})
	
	estadisticas.republicansVotes= + (parseFloat(estadisticas.republicansVotes/estadisticas.republicans).toFixed(2))
	estadisticas.independentsVotes= + (parseFloat(estadisticas.independentsVotes/estadisticas.independents).toFixed(2))
	estadisticas.democratsVotes= + (parseFloat(estadisticas.democratsVotes/estadisticas.democrats).toFixed(2))

	if(estadisticas.republicans==0){
		estadisticas.republicansVotes=0
	}
	if(estadisticas.independents==0){
		estadisticas.independentsVotes=0
	}
	if(estadisticas.democrats==0){
		estadisticas.democratsVotes=0
	}

	
	estadisticas.totalPorcentaje = parseFloat((estadisticas.democratsVotes+estadisticas.republicansVotes+estadisticas.independentsVotes) / 3).toFixed(2)

	
	document.getElementById("table1").innerHTML = '<tr>' + '<td>' + 'Democrats' + '</td>' + '<td>' + estadisticas.democrats + '</td>' + '<td>' + estadisticas.democratsVotes + '%' + '</td>' + '</tr>' + '<tr>' + '<td>' + 'Republicans' + '</td>' + '<td>' + estadisticas.republicans + '</td>' + '<td>' + estadisticas.republicansVotes + '%' + '</td>' + '</tr>' + '<tr>' + '<td>' + 'Independents' + '</td>' + '<td>' + estadisticas.independents + '</td>' + '<td>' + estadisticas.independentsVotes + '%' + '</td>' + '</tr>' + '<tr>' + '<td>' + 'Total' + '</td>' + '<td>' + estadisticas.total + '</td>' + '<td>' + estadisticas.totalPorcentaje + '%</td>' + '</tr>'

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


let tenPercent1 = (membersOrdLeast.length*0.10).toFixed(0)
let filterLeast = membersOrdLeast[tenPercent1].missed_votes_pct
membersOrdLeast.filter(element => element.missed_votes_pct>=filterLeast).forEach(e =>{
	estadisticas.leastEngaged.push(e)
})
estadisticas.leastEngaged.forEach(missed=>{
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

let filterleastLoyal = membersOrdLeastLoyal[tenPercent1].votes_with_party_pct
membersOrdLeastLoyal.filter(element => element.votes_with_party_pct<=filterleastLoyal).forEach(e =>{
	estadisticas.leastLoyal.push(e)
})
estadisticas.leastLoyal.forEach(ll =>{
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


let tenPercent = (membersOrd.length * 0.10).toFixed(0)
let filter = membersOrd[tenPercent].missed_votes_pct
membersOrd.filter(element => element.missed_votes_pct<=filter).forEach(e =>{
	estadisticas.mostEngaged.push(e)
})
estadisticas.mostEngaged.forEach(missed =>{
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

let filterMostLoyal = membersOrdMostLoyal[tenPercent].votes_with_party_pct
membersOrdMostLoyal.filter(element => element.votes_with_party_pct>=filterMostLoyal).forEach(e =>{
	estadisticas.mostLoyal.push(e)
})
estadisticas.mostLoyal.forEach(ll =>{
	let nombreFull = ll.first_name + " " + (ll.middle_name || " ") + " " + ll.last_name
	let partyVotes = ((ll.votes_with_party_pct/100)*ll.total_votes).toFixed(0)
	if(document.getElementById("table5")){
		document.getElementById("table5").innerHTML += `<tr><td>${nombreFull}</td><td>${partyVotes}</td><td>${ll.votes_with_party_pct}%</td></tr>`
	}
})
