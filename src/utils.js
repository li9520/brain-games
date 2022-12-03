// eslint-disable-next-line import/prefer-default-export
const getRandomValue = (max) => Math.floor(Math.random() * max);
const isEven = (value) => (value % 2 === 0);

export { getRandomValue, isEven };
