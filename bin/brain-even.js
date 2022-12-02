#!/usr/bin/env node

import readlineSync from 'readline-sync';

const isEven = (value) => ((value % 2 === 0) ? 'yes' : 'no');

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const max = 100;
let ramdomValue;
let correct = false;
for (let i = 0; i < 3; i += 1) {
  ramdomValue = Math.floor(Math.random() * max);
  console.log(`Question: ${ramdomValue}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(ramdomValue);
  if (userAnswer !== isEven(ramdomValue)) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${userName}!`);
    correct = false;
    break;
  } else {
    console.log('Correct!');
    correct = true;
  }
}
if (correct) {
  console.log(`Congratulations, ${userName}!`);
}
