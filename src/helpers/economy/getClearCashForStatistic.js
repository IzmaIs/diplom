import { getRandomNumber } from "./getRandomNumber";

export const getClearCashForStatistic = (currentYear) => {
  return [
    {
      "name": `01.${currentYear}`,
      "sum": getRandomNumber(),
    },
    {
      "name": `02.${currentYear}`,
      "sum": getRandomNumber(),
    },
    {
      "name": `03.${currentYear}`,
      "sum": getRandomNumber(),
    },
    {
      "name": `04.${currentYear}`,
      "sum": getRandomNumber(),
    },
    {
      "name": `05.${currentYear}`,
      "sum": getRandomNumber(),
    },
    {
      "name": `06.${currentYear}`,
      "sum": getRandomNumber(),
    },
    {
      "name": `07.${currentYear}`,
      "sum": getRandomNumber(),
    },
    {
      "name": `08.${currentYear}`,
      "sum": getRandomNumber(),
    },
    {
      "name": `09.${currentYear}`,
      "sum": getRandomNumber(),
    },
    {
      "name": `10.${currentYear}`,
      "sum": getRandomNumber(),
    },
    {
      "name": `11.${currentYear}`,
      "sum": getRandomNumber(),
    },
    {
      "name": `12.${currentYear}`,
      "sum": getRandomNumber(),
    },
  ];
};