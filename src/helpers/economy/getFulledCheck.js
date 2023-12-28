import { getRandomNumber } from "./getRandomNumber";

export const getFulledCheck = (currentYear) => {
  return [
    {
      "name": `01.${currentYear}`,
      "value": getRandomNumber() / getRandomNumber(5000, 500),
    },
    {
      "name": `02.${currentYear}`,
      "value": getRandomNumber() / getRandomNumber(5000, 500),
    },
    {
      "name": `03.${currentYear}`,
      "value": getRandomNumber() / getRandomNumber(5000, 500),
    },
    {
      "name": `04.${currentYear}`,
      "value": getRandomNumber() / getRandomNumber(5000, 500),
    },
    {
      "name": `05.${currentYear}`,
      "value": getRandomNumber() / getRandomNumber(5000, 500),
    },
    {
      "name": `06.${currentYear}`,
      "value": getRandomNumber() / getRandomNumber(5000, 500),
    },
    {
      "name": `07.${currentYear}`,
      "value": getRandomNumber() / getRandomNumber(5000, 500),
    },
    {
      "name": `08.${currentYear}`,
      "value": getRandomNumber() / getRandomNumber(5000, 500),
    },
    {
      "name": `09.${currentYear}`,
      "value": getRandomNumber() / getRandomNumber(5000, 500),
    },
    {
      "name": `10.${currentYear}`,
      "value": getRandomNumber() / getRandomNumber(5000, 500),
    },
    {
      "name": `11.${currentYear}`,
      "value": getRandomNumber() / getRandomNumber(5000, 500),
    },
    {
      "name": `12.${currentYear}`,
      "value": getRandomNumber() / getRandomNumber(5000, 500),
    },
  ];
};