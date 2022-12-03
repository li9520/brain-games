#!/usr/bin/env node

import readlineSync from 'readline-sync';

const randomValue = (max) => Math.floor(Math.random() * max);
const calcStr = (str) => {
  const arr = str.split(' ');
  switch (arr[1]) {
    case '+':
      return Number(arr[0]) + Number(arr[2]);
    case '-':
      return Number(arr[0]) - Number(arr[2]);
    case '*':
      return Number(arr[0]) * Number(arr[2]);
    default:
      return Number(arr[0]) / Number(arr[2]);
  }
};

const op = ['+', '-', '*', '/'];
const maxOp = op.length - 1;
const maxValue = 10;

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('What is the result of the expression?');

let correct = false;
for (let i = 0; i < 3; i += 1) {
  const operand1 = randomValue(maxValue);
  const operand2 = randomValue(maxValue);
  const operation = op[randomValue(maxOp)];
  const strCalcOp = (`${operand1} ${operation} ${operand2}`);
  console.log(`Question: ${strCalcOp}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = calcStr(strCalcOp);
  if (Number(userAnswer) !== calcStr(strCalcOp)) {
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
