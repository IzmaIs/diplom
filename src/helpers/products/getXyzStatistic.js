export const getXyzStatistic = (array) => {
  const n = array.length;
  const mean = array.reduce((a, b) => a + b) / n;
  const stdevp = Math.sqrt(array.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n);
  const averageValue = array.reduce((acc, cur) => acc + cur, 0) / array.length;
  return Math.round((stdevp / averageValue) * 100);
};
