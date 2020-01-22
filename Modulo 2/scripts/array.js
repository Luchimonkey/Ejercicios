// ------------------EJERCICIO 1--------------------
var nombres=["Alan", "Diego", "Ariel", "Erika", "Teo", "Nahuel L", "Leandro", "Ivan", "Lucio", "Lucas H", "Lucas G", "Rocio", "Gian", "Roman", "Gabriel", "Nahuel", "Matias", "Eduardo", "Branko", "Elias", "Ezequiel", "Rodrigo", "Jose Luis", "Agustin", "Nicolas F", "Nicolas S", "Meji"];
// console.log(nombres.length)
// console.log(nombres.sort())
nombres=nombres.sort()
console.log("Primer nombre " + nombres[0])
console.log("Ultimo nombre " + nombres[nombres.length-1])
for (i=0;i<nombres.length;i++) {
	console.log(nombres[i])
}



// -------------------EJERCICIO 2--------------------
// --------------Lista de edades con While-----------------

console.log("Edades con While")
var edades=[12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
var i=0;
while (i<edades.length) {
	console.log(edades[i])
	i++;
}

// --------------Lista de edades pares con while----------------

console.log("Edades Pares con While")
var edades=[12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
var i=0;
while (i<edades.length) {
	console.log(edades[i])
	i=i+2;
}

// --------------Lista de edades con for------------------

console.log("Edades con For")
var edades=[12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
for (i=0;i<edades.length;i++) {
	console.log(edades[i])
}



// -----------------------EJERCICIO 3-------------------------
console.log("Funcion para mostrar el menor numero de un array")
var matriz1=[3, 5, 2, 7, 9, 10, 1, 4]
var matriz2=[64, 42, 32, 54, 24, 20, 13, 7, 7, 90, 10, 4]
function menorNum(array){
	var min=array[0]
	for (let i = 1 ; i < array.length; i++) {
		if(min<array[i]) {
			min=min
		}
		else {
			min=array[i]
		}
	}
	console.log("menor numero del array: " + min)
}
menorNum(matriz1)
menorNum(matriz2)



//------------------------EJERCICIO 4---------------------------
console.log("funcion para mostrar el mayornumero de un array")
function mayorNum(array){
	var max=array[0]
	for (let i = 1 ; i < array.length; i++){
		if(max>array[i]){
			max=max
		}
		else{
			max=array[i]
		}
	}
	console.log("mayor numero del array: " + max)
}
mayorNum(matriz1)
mayorNum(matriz2)



//------------------------EJERCICIO 5--------------------------
console.log("funcion que recibe array e index y muestra la posicion del array respecto al index")
var index=5
function indexArray(arrayIndex){
	console.log(arrayIndex[index])
}
indexArray(matriz1)
indexArray(matriz2)



//-------------------------EJERCICIO 6----------------------------
console.log("funcion que recibe arrays y muestra solo aquellos que se repiten")
var matrizRepeat= [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]
var repetidos=[]
function repeatArray(repeatArray){
	for (let i = 0 ; i < repeatArray.length; i++){
		for (let j = (i+1) ; j < repeatArray.length ; j++) {
			if(repeatArray[i]==repeatArray[j]){
				repetidos.push(repeatArray[i])
			}
		}
	}
	console.log(repetidos)
}
repeatArray(matrizRepeat);

// var matrizRepeat= [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100,6 ,6 ,6]
// function repeatArray(repeatArray){
// 	let valores=[];
// 	for (let i =0; i < repeatArray.length; i++){
// 		for (let j=(i+1);  j < repeatArray.length; j++) {
// 			if(repeatArray[i]==repeatArray[j]){
// 				if(valores.indexOf(repeatArray[i])== (-1)){
// 				valores.push(repeatArray[i]);
// 			}
// 			}
// 		}
// 	}
// 	return valores;
// }
// console.log(repeatArray(matrizRepeat));



//------------------------EJERCICIO 7----------------------------
console.log("funcion que une los elementos del array en un string")
var myColor = ["Red", "Green", "White", "Black"]
// var stringColores = ""
function fusionString(fusion){
	// for (let i=0; i<fusion.length; i++){
	// 	variable.push(fusion[i])	
	// }
	// console.log(variable)
	var string = fusion.toString()
	console.log(string)
}
fusionString(myColor)
// function fusionString(fusion,variable){
// 	for (let i=0; i<fusion.length; i++){
// 		variable.push(fusion[i])	
// 	}
// 	console.log(variable)
// }
// fusionString(myColor,stringColores)