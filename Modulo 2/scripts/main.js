//-----------------EJERCICIO 1-------------------
console.log("funcion que da vuelta un numero")
var numero = 32443
var numeroInv = ""
function inversorNum(invert){
	numeroInv=invert.toString().split("").reverse().join("")
	return(numeroInv)
	//para convertir string a numero .parseInt()
}
console.log(inversorNum(numero))



//-----------------EJERCICIO 2-------------------
console.log("funcion que ordena alfabeticamente un string")
var texto = "webmaster"
var textoAlfabetico = ""
function orderString(order){
	textoAlfabetico=order.split("").sort().join("")
	return(textoAlfabetico)
}
console.log(orderString(texto))



//-------------------EJERCICIO 3-------------------
//no lean lo acotado por que me da verguenza, lo voy a usar a modo de ejemplo para futuro jajaj
console.log("funcion que convierte la primera letra de cada palabra de un string en mayuscula")
let textoMayuscula = "a veces suelo pensar, a veces no lo hago tanto"
let textoProcesado = []
//let finaltextoProcesado = []
//let palabras = ""
//let palabraMayus
//let mayusculaPalabra = ""
//let finalfinalfinalfinal
function mayusFirst(mayuscula){
	textoProcesado=mayuscula.split(" ")
	for(let i=0; i<textoProcesado.length; i++){
		textoProcesado[i]=textoProcesado[i].substring(0, 1).toUpperCase()+textoProcesado[i].substring(1, textoProcesado[i].length)+" "
//		palabras=
//		palabraMayus=mayusculaPalabra+palabras+" "
//		textoProcesado[i]=palabraMayus
	}
	return(textoProcesado.join(""))
}
console.log(mayusFirst(textoMayuscula))



//--------------------EJERCICIO 4-------------------------
console.log("funcion que encuentra la palabra mas larga")
let textoLongWord = "cuenta la leyenda que aquel que desentierre el tesoro africano, sera poseedor de un poder inimaginable"
let longWordArray = []
let longWord
function longestPalabra(long){
	longWordArray=long.split(" ")
	longWord=longWordArray[0]
	for (let i=1; i<longWordArray.length; i++){
		if (longWordArray[i].length>longWord.length){
			longWord=longWordArray[i]
		}
			
	}
	return(longWord)
}
console.log(longestPalabra(textoLongWord))