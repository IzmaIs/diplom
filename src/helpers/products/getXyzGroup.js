export const getXyzGroup = (coefficientVariation) => {
  if (coefficientVariation < 10) {
    return "X";
  }
  if (coefficientVariation > 10 && coefficientVariation < 25) {
    return "Y";
  }
  return "Z";
};
