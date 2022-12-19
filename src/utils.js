// eslint-disable-next-line import/prefer-default-export
const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min) + min);
const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);
const isEven = (value) => (value % 2 === 0);

const isPrime = (value) => {
  if (value < 2) {
    return false;
  }
  const sqrtValue = Math.sqrt(value);
  for (let i = 2; i <= sqrtValue; i += 1) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
};

export {
  getRandomValue, getRandomIndex, isEven, isPrime,
};
