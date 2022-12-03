import runGame from '../index.js';
import { getRandomValue, isEven } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxValue = 100;
let expression;

const getQuestion = () => {
  expression = getRandomValue(maxValue);
  return expression;
};

const getAnswer = () => ((isEven(expression)) ? 'yes' : 'no');

export default () => { runGame(description, getQuestion, getAnswer); };
