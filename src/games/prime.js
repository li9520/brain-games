import runGame from '../index.js';
import { getRandomValue, isPrime } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxValue = 100;
const minValue = 0;

const getQuestionAndAnswer = () => {
  const value = getRandomValue(minValue, maxValue);
  const answer = (isPrime(value)) ? 'yes' : 'no';
  return [value, answer];
};

export default () => { runGame(description, getQuestionAndAnswer); };
