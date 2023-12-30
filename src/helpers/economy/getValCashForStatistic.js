import {getRandomNumber} from "./getRandomNumber";

export const getValCashForStatistic = (currentYear) => {
  return [
    {
      name: `01.${currentYear}`,
      sum: getRandomNumber() - getRandomNumber(5000, 1000),
    },
    {
      name: `02.${currentYear}`,
      sum: getRandomNumber() - getRandomNumber(5000, 1000),
    },
    {
      name: `03.${currentYear}`,
      sum: getRandomNumber() - getRandomNumber(5000, 1000),
    },
    {
      name: `04.${currentYear}`,
      sum: getRandomNumber() - getRandomNumber(5000, 1000),
    },
    {
      name: `05.${currentYear}`,
      sum: getRandomNumber() - getRandomNumber(5000, 1000),
    },
    {
      name: `06.${currentYear}`,
      sum: getRandomNumber() - getRandomNumber(5000, 1000),
    },
    {
      name: `07.${currentYear}`,
      sum: getRandomNumber() - getRandomNumber(5000, 1000),
    },
    {
      name: `08.${currentYear}`,
      sum: getRandomNumber() - getRandomNumber(5000, 1000),
    },
    {
      name: `09.${currentYear}`,
      sum: getRandomNumber() - getRandomNumber(5000, 1000),
    },
    {
      name: `10.${currentYear}`,
      sum: getRandomNumber() - getRandomNumber(5000, 1000),
    },
    {
      name: `11.${currentYear}`,
      sum: getRandomNumber() - getRandomNumber(5000, 1000),
    },
    {
      name: `12.${currentYear}`,
      sum: getRandomNumber() - getRandomNumber(5000, 1000),
    },
  ];
};
