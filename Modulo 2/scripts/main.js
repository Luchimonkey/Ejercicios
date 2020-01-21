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
