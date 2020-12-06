// Exersice (2)
let firstName, givenName;
firstName = "Stacey";
let name = givenName || firstName || "John";
console.log(name);
// result is Stacy because it is the only assigned variable, givenName is not assigned to a value and "John" is not declared.
