console.log("Starting Javascript...");
var myName="Lucio";
console.log(myName);
var age=20;
console.log(age);
var ignasiAge=32;
var ageDiff=(age-ignasiAge);
console.log(ageDiff);

// -----------------------------------------------------

if (age<21) {
	console.log("You are younger than 21.");
}
else {
	console.log("You are older than 21.");
}

// -----------------------------------------------------

if (age==ignasiAge) {
	console.log("You have the same age as Ignasi.");
}
else if (age<ignasiAge) {
	console.log("You are younger than Ignasi.");
}
else {
	console.log("You are older than Ignasi.");
}