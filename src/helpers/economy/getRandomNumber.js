export const getRandomNumber = (maxNumber = 10000, minNumber = 1000) =>
  Math.floor(Math.random() * maxNumber) + minNumber;
