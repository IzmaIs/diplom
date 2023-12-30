import {getRandomNumber} from "./getRandomNumber";

export const getSoldProducts = (currentYear) => {
  return [
    {
      name: `01.${currentYear}`,
      value: getRandomNumber(),
    },
    {
      name: `02.${currentYear}`,
      value: getRandomNumber(),
    },
    {
      name: `03.${currentYear}`,
      value: getRandomNumber(),
    },
    {
      name: `04.${currentYear}`,
      value: getRandomNumber(),
    },
    {
      name: `05.${currentYear}`,
      value: getRandomNumber(),
    },
    {
      name: `06.${currentYear}`,
      value: getRandomNumber(),
    },
    {
      name: `07.${currentYear}`,
      value: getRandomNumber(),
    },
    {
      name: `08.${currentYear}`,
      value: getRandomNumber(),
    },
    {
      name: `09.${currentYear}`,
      value: getRandomNumber(),
    },
    {
      name: `10.${currentYear}`,
      value: getRandomNumber(),
    },
    {
      name: `11.${currentYear}`,
      value: getRandomNumber(),
    },
    {
      name: `12.${currentYear}`,
      value: getRandomNumber(),
    },
  ];
};
