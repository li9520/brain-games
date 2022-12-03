// eslint-disable-next-line import/prefer-default-export
const getRandomValue = (max) => Math.floor(Math.random() * max);
const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);
const isEven = (value) => (value % 2 === 0);

export { getRandomValue, getRandomIndex, isEven };
