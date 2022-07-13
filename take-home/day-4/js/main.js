const firstNumber = prompt('First Number');
const secondNumber = prompt('Second Number');

const firstInt = parseInt(firstNumber);
const secondInt = parseInt(secondNumber);
console.log(firstInt);
if (firstInt > secondInt) {
  alert(`${firstInt} is bigger than ${secondInt}`);
}
if (firstInt < secondInt) {
  alert(`${secondInt} is bigger than ${firstInt}`);
}
if (firstInt == secondInt)  {
  alert(`${firstInt} and ${secondInt} are equal`);
}
if (!firstInt) {
    alert('Please enter digits only.');
    firstNumber = prompt('First Number');
  }
  if (!secondInt) {
    alert('Please enter digits only.');
    secondNumber = prompt('Second Number');
  }