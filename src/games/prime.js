import runGame from '../index.js';
import { getRandomValue } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxValue = 100;
const minValue = 0;

const isPrime = (value) => {
  if (value < 4) return true;
  if (value % 2 === 0 || value % 3 === 0) return false;
  for (let i = 5, N = Math.sqrt(value); i <= N; i += 2) if (value % i === 0) return false;
  return true;
};

const getQuestionAndAnswer = () => {
  const expression = getRandomValue(minValue, maxValue);
  const answer = (isPrime(expression)) ? 'yes' : 'no';
  return [expression, answer];
};

export default () => { runGame(description, getQuestionAndAnswer); };
