import {getAbcGroup} from "./getAbcGroup";
import {getXyzStatistic} from "./getXyzStatistic";
import {getXyzGroup} from "./getXyzGroup";

export const getProductsWithStatistic = (arr) => {
  const newArr = arr.map((i) => ({
    ...i,
    share: Math.round((i.allSumSold / arr.reduce((acc, cur) => acc + cur.allSumSold, 0)) * 100),
    accShare: 0,
  }));

  for (let i = 0; i < newArr.length; i++) {
    const acc = newArr[i]?.share + newArr[i - 1]?.accShare;
    newArr[i].accShare = i === 0 ? newArr[i].share : acc;
  }

  return newArr.map((i) => {
    const coefficientVariation = getXyzStatistic(i.allSumsSoldInPeriod);
    const XYZgroup = getXyzGroup(coefficientVariation);
    return {
      ...i,
      ABCgroup: getAbcGroup(i.accShare),
      coefficientVariation,
      XYZgroup,
    };
  });
};
