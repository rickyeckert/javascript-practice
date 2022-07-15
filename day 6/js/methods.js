// let myFunction = function() {};
function myFunction(){
    console.log('hello');
    console.log('goodbye');
    return 10 * 10;
    return 'hello';
    console.log('?');
}

myFunction();
myFunction();

let myAnswer = myFunction();
console.log(myAnswer);

console.log('abcs are cool' .toUpperCase().toLowerCase().split(' '));

console.log(math.PI);

console.log(Math.pow(5, 2));
console.log(Math.pow(5, 8));
console.log(Math.sqrt(25));
console.log(Math.sqrt(100));
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random() * 3);
const randomNumber = Math.random() * 3;
console.log(randomNumber, 'Random Number');
console.log(Math.floor(randomNumber));
console.log(Math.ceiling(randomNumber));
console.log(Math.round(randomNumber));


const myDate = new Date();
console.log( myDate);
console.log( myDate.getFullYear());
console.log( myDate.getMonth());
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
console.log(months[myDate.getMonth()]);
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(days[myDate.getDay()]);

console.log(myDate.setFullYear(2023));
console.log(myDate);
myDate.setDate(myDate.getDate() + 90);
console.log();