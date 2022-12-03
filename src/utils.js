// eslint-disable-next-line import/prefer-default-export
const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min) + min);
const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);
const isEven = (value) => (value % 2 === 0);

export { getRandomValue, getRandomIndex, isEven };
