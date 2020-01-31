// for (i=0; i<data.results[0].members.length; i+){
// 	document.getElementById("tablebody").innerHTML = '<tr>' + '<td>' + data.results[0].members[i].first_name + '</td>' + '</tr>'
// }

const members = data.results[0].members
const select = document.querySelector("select")
/*members.forEach(member => {
	// if(member.middle_name==null){
	// 	member.middle_name = " "
	// }
	// else{
	// 	member.middle_name = " " + member.middle_name + " "
	// }
	let nombreFull = member.first_name + " " + (member.middle_name || " ") + " " + member.last_name
	let nombreLink
	if(member.url==""){
		nombreLink=nombreFull
	}
	else{
		nombreLink=`<a target="_blank" href="${member.url}">` + nombreFull + `</a>`
	}
	document.getElementById("tablebody").innerHTML += '<tr>' + '<td>' + nombreLink + '</td>' + '<td>' + member.party + '</td>' + '<td>' + member.state + '</td>' + '<td>' + member.seniority + '</td>' + '<td>' + "% " + member.votes_with_party_pct + '</td>' + '</tr>'
})*/

var checkbox = document.getElementsByClassName("input")
var aux = ""
let estados = []
members.forEach(member =>{
	if (estados.indexOf(member.state) == (-1)){
		estados.push(member.state)}
	})
for(var i=0; i<estados.length; i++){
	select.innerHTML += `<option value="${estados[i]}">${estados[i]}</option>`
}
function filtrocheck(){
	document.getElementById("tablebody").innerHTML = ""
	let aux1 = members.filter(function (member){
		for(i=0; i<checkbox.length; i++){
			if(checkbox[i].checked && checkbox[i].name==member.party && (member.state== select.value || select.value== "all")){
				let nombreLink
				let nombreFull = member.first_name + " " + (member.middle_name || " ") + " " + member.last_name
				if(member.url==""){
					nombreLink=nombreFull
				}
				else{
					nombreLink=`<a target="_blank" href="${member.url}">` + nombreFull + `</a>`
				}
				document.getElementById("tablebody").innerHTML += '<tr>' + '<td>' + nombreLink + '</td>' + '<td>' + member.party + '</td>' + '<td>' + member.state + '</td>' + '<td>' + member.seniority + '</td>' + '<td>' + "% " + member.votes_with_party_pct + '</td>' + '</tr>'
				return member
			}
		}
	})
	console.log(aux1)
}
for(i=0; i<checkbox.length; i++){
	checkbox[i].addEventListener("click", filtrocheck)
	document.getElementById("select").addEventListener("change",filtrocheck)
}
filtrocheck()