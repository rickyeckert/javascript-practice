// functions
// keyword function
// function name(parameter) { does work optional return value }
// keyword name (parameter)

function triple(number) {
    return number * 3;
}

console.log(triple(2.5));
console.log(triple(5));

console.log(1)
console.log('hello'.toUpperCase());

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    greeting: function greet(){
        return `Hello, I am ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    },
    haveBirthday: function(){
        this.age +=1;
    }
}
user.haveBirthday();
user.haveBirthday();
console.log(user.greeting());

function add(a, b){
    console.log(this, 'this');
    return a + b;
}
add();
const button = document.querySelector('button');
const colors = ['red', 'green', 'blue'];
button.addEventListener('click', function whatToDoWhenButtonIsClicked() {
    console.log(this, 'this');
    user.haveBirthday();
    document.querySelector('h1').innerHTML = user.greeting();
    document.querySelector('h1').style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

// flappy bird

const birdImg = document.querySelector('img');
birdImg.style.position = 'absolute';
birdImg.style.top = '100px';
let gravity = 8;

function gameLoop() {
    const birdTop = parseInt(birdImg.style.top);
    console.log(birdTop);
    console.log(birdImg.style.top);
    if (gravity < 8){
        gravity += .6;
    }
    birdImg.style.top = (birdTop + gravity) + 'px';
    requestAnimationFrame(gameLoop);
}
gameLoop();

document.addEventListener('click', function(){
    gravity = -15;
});