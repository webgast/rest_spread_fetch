console.log('Im ready');

//derest wordt binnen functie een array met N waarden
const myfunc = function (...derest) {
    console.log(derest);
}

//we roepen de functie aan met een stapel variabelen
myfunc(1,2,3,4,5,6);

//accepts 1 parameter.
const myotherfunc = function (x) {
    console.log(arguments.callee.name + " called");
    console.log("first arg x was: " + x);
    console.log("all arguments: ");
    console.log(arguments);
}

//er was eens een array
bliep = [1,2,3,4,5];

//we spreiden diens waarden
myotherfunc(...bliep);

//wat gebeurt er als we 'm in 1 keer geven?
myotherfunc(bliep);

fetch("https://swapi.co/api/people/1/")
    .then(response => response.json())
		.then(data => console.log(data)) 
    .catch(error => {
        console.log(error)
    });