export const getAbcGroup = (newPercent) => {
  if (newPercent < 80) {
    return "A";
  }
  if (newPercent > 80 && newPercent < 95) {
    return "B";
  }
  return "C";
};
