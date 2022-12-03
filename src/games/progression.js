import runGame from '../index.js';
import { getRandomValue, getRandomIndex } from '../utils.js';

const description = 'What number is missing in the progression?';
const minArrLength = 5;
const maxArrLength = 10;
const maxValue = 100;
const minValue = 0;
const minDiff = 1;
const maxDiff = 10;

const getQuestionAndAnswer = () => {
  const arr = [];
  const arrLength = getRandomValue(minArrLength, maxArrLength);
  const firstElement = getRandomValue(minValue, maxValue);
  const diff = getRandomValue(minDiff, maxDiff);
  arr.push(firstElement);

  for (let i = 1; i < arrLength; i += 1) {
    arr.push(arr[i - 1] + diff);
  }
  const randomIndex = getRandomIndex(arr);
  const answer = String(arr[randomIndex]);
  arr[randomIndex] = '..';
  const question = arr.join(' ');
  return [question, answer];
};

export default () => { runGame(description, getQuestionAndAnswer); };
