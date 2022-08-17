const name =  'Veera';
const age = 35;

const sentence = 'My name is ${name}, and I am  ${age} years old';

console.log(sentence);

class Human {
    constructor() {
      this.gender = 'Male';
    }
    printGender() {
      console.log(this.gender);
    }
  }
  const human = new Human();
  human.printGender();


const numbers = [1, 2, 3];
const newNumbers = [...numbers, 6];
console.log(newNumbers);