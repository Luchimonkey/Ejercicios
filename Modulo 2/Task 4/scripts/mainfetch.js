let url
if(document.getElementById("senatedatapuntocom")){
	url = "https://api.propublica.org/congress/v1/113/senate/members.json"
}
if(document.getElementById("housedatapuntocom")){
	url = "https://api.propublica.org/congress/v1/113/house/members.json"
}
let data
let init = {
	method: 'GET',
	headers:{
		'X-API-Key': '1T24VFbWcBAmXnaz7Gr0lwvuPDhRM46jmQ1Vn94O'
	}
}	

fetch(url, init)
	.then(function(res){
		if(res.ok){
			return res.json()
		}
		else{
			throw new Error(res.status)
		}
	})
	.then(function(json){
		data = json
		drawTables()
	})
	.catch(function(error){
		console.log(error)
