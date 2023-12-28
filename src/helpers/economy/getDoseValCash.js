import { getRandomNumber } from "./getRandomNumber";

export const getDoseValCash = (currentYear) => {
  const TO = getRandomNumber();
  return [
    {
      name: `01.${currentYear}`,
      value: Math.round(((TO - getRandomNumber(5000, 1000)) / TO) * 100),
    },
    {
      name: `02.${currentYear}`,
      value: Math.round(((TO - getRandomNumber(5000, 1000)) / TO) * 100),
    },
    {
      name: `03.${currentYear}`,
      value: Math.round(((TO - getRandomNumber(5000, 1000)) / TO) * 100),
    },
    {
      name: `04.${currentYear}`,
      value: Math.round(((TO - getRandomNumber(5000, 1000)) / TO) * 100),
    },
    {
      name: `05.${currentYear}`,
      value: Math.round(((TO - getRandomNumber(5000, 1000)) / TO) * 100),
    },
    {
      name: `06.${currentYear}`,
      value: Math.round(((TO - getRandomNumber(5000, 1000)) / TO) * 100),
    },
    {
      name: `07.${currentYear}`,
      value: Math.round(((TO - getRandomNumber(5000, 1000)) / TO) * 100),
    },
    {
      name: `08.${currentYear}`,
      value: Math.round(((TO - getRandomNumber(5000, 1000)) / TO) * 100),
    },
    {
      name: `09.${currentYear}`,
      value: Math.round(((TO - getRandomNumber(5000, 1000)) / TO) * 100),
    },
    {
      name: `10.${currentYear}`,
      value: Math.round(((TO - getRandomNumber(5000, 1000)) / TO) * 100),
    },
    {
      name: `11.${currentYear}`,
      value: Math.round(((TO - getRandomNumber(5000, 1000)) / TO) * 100),
    },
    {
      name: `12.${currentYear}`,
      value: Math.round(((TO - getRandomNumber(5000, 1000)) / TO) * 100),
    },
  ];
};