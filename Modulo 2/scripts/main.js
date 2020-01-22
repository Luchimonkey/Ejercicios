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