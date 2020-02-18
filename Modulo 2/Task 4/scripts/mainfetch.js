var app = new Vue({
	el: '#app',
	data: {
		url: undefined,
		init : {
			method: 'GET',
			headers:{
				'X-API-Key': '1T24VFbWcBAmXnaz7Gr0lwvuPDhRM46jmQ1Vn94O'
			}
		},	
		members:[],
		least_engaged:[],
		most_engaged:[],
		least_loyal:[],
		most_loyal:[],		
		partyValue:["R", "I", "D"],
		state:[],
		partidos:{
			independents:{
				name: "Independents",
				value: "I",
				representantes: 0,
				porcentaje: 0,
			},
			republicans:{
				name: "Republicans",
				value: "R",
				representantes: 0,
				porcentaje: 0,
			},
			democrats:{
				name: "Democrats",
				value: "D",
				representantes: 0,
				porcentaje: 0,
			},
			total:{
				name: "Total",
				representantes: 0,
				porcentaje: 0,
			}
		},
	},
	created() {
		if(document.getElementById("senatedatapuntocom")){
			this.url="https://api.propublica.org/congress/v1/113/senate/members.json"
		}
		if(document.getElementById("housedatapuntocom")){
			this.url="https://api.propublica.org/congress/v1/113/house/members.json"
		}
		fetch(this.url, this.init)
			.then(function(res){
				if(res.ok){
					return res.json()
				}
				else{
					throw new Error(res.status)
				}
			})
			.then(function(json){
				app.members=json.results[0].members
				app.state=app.filtrarEstados(app.members)
				app.primeraTabla()
				app.least_engaged=app.tenPct(app.members,"missed_votes_pct",false)
        		app.most_engaged=app.tenPct(app.members,"missed_votes_pct",true)
        		app.most_loyal=app.tenPct(app.members,"votes_with_party_pct",false)
		        app.least_loyal=app.tenPct(app.members,"votes_with_party_pct",true)
			})
			.catch(function(error){
				console.log(error)
			})
	},
	methods:{
		filtrarEstados(array){
			let result = []
			array.forEach(member =>{
				if (result.indexOf(member.state) == (-1)){
					result.push(member.state)}
				})
			result.sort()
			return result
		},
		primeraTabla(){
			app.members.forEach(member =>{
				if(member.party=="R"){
					app.partidos.republicans.representantes++
					app.partidos.republicans.porcentaje+=member.votes_with_party_pct
				}
				if(member.party=="I"){
					app.partidos.independents.representantes++
					app.partidos.independents.porcentaje+=member.votes_with_party_pct
				}
				if(member.party=="D"){
					app.partidos.democrats.representantes++
					app.partidos.democrats.porcentaje+=member.votes_with_party_pct
				}
				app.partidos.total.representantes++
			})
			app.partidos.republicans.porcentaje =+ (parseFloat(app.partidos.republicans.porcentaje/app.partidos.republicans.representantes).toFixed(2))
			app.partidos.independents.porcentaje =+ (parseFloat(app.partidos.independents.porcentaje/app.partidos.independents.representantes).toFixed(2))
			app.partidos.democrats.porcentaje =+ (parseFloat(app.partidos.democrats.porcentaje/app.partidos.democrats.representantes).toFixed(2))
			if(app.partidos.republicans.representantes==0){
				app.partidos.republicans.porcentaje=0
			}
			if(app.partidos.independents.representantes==0){
				app.partidos.independents.porcentaje=0
			}
			if(app.partidos.democrats.representantes==0){
				app.partidos.democrats.porcentaje=0
			}			
			app.partidos.total.porcentaje = parseFloat((app.partidos.republicans.porcentaje+app.partidos.democrats.porcentaje+app.partidos.independents.porcentaje) / 3).toFixed(2)
		},
		tenPct(array,key,isAscendent){
			let result
			let i
			let aux = isAscendent ? 
						[...array].sort((a,b) => a[key] - b[key]).filter(j => j.total_votes !=0)
					: 
						[...array].sort((a,b) => b[key] - a[key]).filter(j => j.total_votes !=0)
			let tenPct = parseInt(aux.length*0.1)

			result = aux.slice(0,tenPct)

			i = result.length

			while(aux[i][key] == result[result.length - 1][key] && i < aux.length){
				result.push(aux[i])
				i++
			}
			return result
		},
		
	},
	computed:{
		filtrarMiembros(){
			return this.members.filter(
				member => app.partyValue.includes(member.party) && app.state.includes(member.state)
			)
		}
	},
})