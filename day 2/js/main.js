// syntax

document.querySelector("h1").innerHTML = "Hello Earth";

day = 2;

Day = 1;

console.log(123, day, Day);

// primitive data types
// yes no = true false = boolean
// 1 = number = count
// "hello" = string = title

no = false;
count = 0;
const title = "Hello World";





// organized data types
// array = [1, 2, 3, 4, 5] | list = [1, 2, 3, 4, 5]

const favoriteMovie = "Step Brothers";
let favoriteMovies = ["Django", "Step Brothers", "Dark Knight", "Pirates of the Carribean"];

const stepBrothers = {
    title: "Step Brothers",
    director: "Adam McKay",
    year: "2008",
    cast: ["Will Ferrell", "John C. Reilly", "Mary Steenburgen", "Richard Jenkins", "Adam Scott", "Kathryn Hahn"],
}

console.log(stepBrothers.title);


// operators
// arithmetic operators
// + - * / % = =+ -= *= /= %=

1 + 1; // 2
1 - 1; // 0
1 * 1; // 1
1 / 1; // 1
1 % 1; // 0 // remainder / modulus

let score = 5;

console.log(score + 5) // 10
console.log(score);
console.log(score += 5); //10
console.log(score += 5); //15
console.log(score);

console.log("hello " + "world");
console.log(5 + "5");
console.log('5' - 3);

// let bigInt = 5n;

//symbol = unique indentifier

const unique1 = Symbol("unique");
const unique2 = Symbol("unique");
console.log(unique2 === unique1, "unique");

console.log('My score is ' + score + '. That is the best score ever. My favorite movis is ' + favoriteMovie);

console.log(`

My score is ${score}. My favorite movie is ${favoriteMovie}

`)

// take-home + daily-challenge

let text = "Supercalifragilisticexpialidocious"
let length = text.length;
console.log(text.length);

console.log(47);

const bigInt = 1000000000000n;
console.log(bigInt);

