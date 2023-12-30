import {getRandomNumber} from "./getRandomNumber";

export const getMidResultMarkup = (currentYear) => {
  const TO = getRandomNumber(3000, 500);

  return [
    {
      name: `01.${currentYear}`,
      value: Math.round(((getRandomNumber() - TO) / TO) * 100),
    },
    {
      name: `02.${currentYear}`,
      value: Math.round(((getRandomNumber() - TO) / TO) * 100),
    },
    {
      name: `03.${currentYear}`,
      value: Math.round(((getRandomNumber() - TO) / TO) * 100),
    },
    {
      name: `04.${currentYear}`,
      value: Math.round(((getRandomNumber() - TO) / TO) * 100),
    },
    {
      name: `05.${currentYear}`,
      value: Math.round(((getRandomNumber() - TO) / TO) * 100),
    },
    {
      name: `06.${currentYear}`,
      value: Math.round(((getRandomNumber() - TO) / TO) * 100),
    },
    {
      name: `07.${currentYear}`,
      value: Math.round(((getRandomNumber() - TO) / TO) * 100),
    },
    {
      name: `08.${currentYear}`,
      value: Math.round(((getRandomNumber() - TO) / TO) * 100),
    },
    {
      name: `09.${currentYear}`,
      value: Math.round(((getRandomNumber() - TO) / TO) * 100),
    },
    {
      name: `10.${currentYear}`,
      value: Math.round(((getRandomNumber() - TO) / TO) * 100),
    },
    {
      name: `11.${currentYear}`,
      value: Math.round(((getRandomNumber() - TO) / TO) * 100),
    },
    {
      name: `12.${currentYear}`,
      value: Math.round(((getRandomNumber() - TO) / TO) * 100),
    },
  ];
};
