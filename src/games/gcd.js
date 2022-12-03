import runGame from '../index.js';
import { getRandomValue } from '../utils.js';

const gcd = (value1, value2) => {
  if (!value2) {
    return value1;
  }
  return gcd(value2, value1 % value2);
};

const description = 'Find the greatest common divisor of given numbers.';
const maxValue = 100;
const minValue = 0;

const getQuestionAndAnswer = () => {
  const value1 = getRandomValue(minValue, maxValue);
  const value2 = getRandomValue(minValue, maxValue);
  const expression = `${value1} ${value2}`;
  const answer = String(gcd(value1, value2));
  return [expression, answer];
};

export default () => { runGame(description, getQuestionAndAnswer); };
