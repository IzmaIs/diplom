import {Context} from "./PageProvider.context";
import {useCallback, useLayoutEffect, useMemo, useState} from "react";
import {useGetDataForCharts} from "../../hooks";
import {
  getBuyersCount,
  getClearCashForStatistic,
  getDoseValCash,
  getFulledCheck,
  getMidCheck,
  getMidResultMarkup,
  getProducts,
  getProductsWithStatistic,
  getSoldProducts,
  getValCashForStatistic,
} from "../../helpers";

const curYear = 2023;
const users = [
  {
    id: 1,
    login: "admin",
    password: "1234",
    fullName: "А. А. Админович",
  },
];
export const PageProvider = ({children}) => {
  const [currentYear, setCurrentYear] = useState(curYear);
  const [abcAnalysis, setAbcAnalysis] = useState("price");
  const [line, setLine] = useState(false);

  const [user, setUser] = useState();
  const {value: clearCash} = useGetDataForCharts(
    getClearCashForStatistic(currentYear),
    currentYear,
  );
  const {value: valCash} = useGetDataForCharts(getValCashForStatistic(currentYear), currentYear);
  const {value: dosValCash} = useGetDataForCharts(getDoseValCash(currentYear), currentYear);
  const {value: midResultMarkup} = useGetDataForCharts(
    getMidResultMarkup(currentYear),
    currentYear,
  );
  const {value: soldProducts} = useGetDataForCharts(getSoldProducts(currentYear), currentYear);
  const {value: buyersCount} = useGetDataForCharts(getBuyersCount(currentYear), currentYear);
  const {value: midCheck} = useGetDataForCharts(getMidCheck(currentYear), currentYear);
  const {value: checkFulled} = useGetDataForCharts(getFulledCheck(currentYear), currentYear);

  const memoSetUser = useCallback((info) => {
    const trueUser = users.find((i) => i.login === info?.login && i.password === info.password);

    if (trueUser) {
      setUser(trueUser);
      localStorage.setItem("login", info.login);
      localStorage.setItem("password", info.password);
      return true;
    }
    setUser(null);
    localStorage.removeItem("login");
    localStorage.removeItem("password");
    return false;
  }, []);

  const memoSetAbcAnalysis = useCallback((analysisType) => {
    setAbcAnalysis(analysisType);
  }, []);

  const memoSetCurrentYear = useCallback((newYear) => {
    setCurrentYear(newYear);
  }, []);

  const products = useMemo(() => getProducts(), []);

  const memoProduct = useMemo(() => {
    return getProductsWithStatistic(products);
  }, [products]);

  const memoLine = useCallback((val) => {
    setLine(val);
  }, []);

  useLayoutEffect(() => {
    const login = localStorage.getItem("login");
    const password = localStorage.getItem("password");

    if (users.find((i) => i.login === login && i.password === password)) {
      setUser(users.find((i) => i.login === login && i.password === password));
    }
  }, [user]);

  const value = useMemo(() => {
    return {
      clearCash,
      valCash,
      dosValCash,
      midResultMarkup,
      soldProducts,
      buyersCount,
      midCheck,
      checkFulled,
      memoProduct,

      currentYear,
      memoSetCurrentYear,

      abcAnalysis,
      memoSetAbcAnalysis,

      user,
      memoSetUser,
      line,
      memoLine,
    };
  }, [clearCash, valCash, dosValCash, midResultMarkup, soldProducts, buyersCount, midCheck, checkFulled, memoProduct, currentYear, memoSetCurrentYear, abcAnalysis, memoSetAbcAnalysis, user, memoSetUser, line, memoLine]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
