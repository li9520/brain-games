import runGame from '../index.js';
import { getRandomValue, isEven } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxValue = 100;
const minValue = 0;

const getQuestionAndAnswer = () => {
  const expression = getRandomValue(minValue, maxValue);
  const answer = ((isEven(expression)) ? 'yes' : 'no');
  return [expression, answer];
};

export default () => { runGame(description, getQuestionAndAnswer); };
