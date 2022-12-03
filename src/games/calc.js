import runGame from '../index.js';
import { getRandomValue, getRandomIndex } from '../utils.js';

const calc = (value1, value2, symbol) => {
  switch (symbol) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    default:
      return value1 / value2;
  }
};

const description = 'What is the result of the expression?';
const maxValue = 10;
const op = ['+', '-', '*', '/'];

const getQuestionAndAnswer = () => {
  const operand1 = getRandomValue(maxValue);
  const operand2 = getRandomValue(maxValue);
  const operation = op[getRandomIndex(op)];
  const expression = (`${operand1} ${operation} ${operand2}`);
  const answer = String(calc(operand1, operand2, operation));
  return [expression, answer];
};

export default () => { runGame(description, getQuestionAndAnswer); };
