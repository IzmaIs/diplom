import classes from "./main.module.scss";
import { BarChart, Carousel, OneLineChart } from "../components";
import { NewsCard, ProductCard } from "../commons";
import { news } from "./consts";
import { useMemo, useState } from "react";

import {
  getBuyersCount,
  getClearCashForStatistic,
  getDoseValCash,
  getFulledCheck,
  getMidCheck,
  getMidResultMarkup,
  getProducts,
  getSoldProducts,
  getValCashForStatistic,
} from "../helpers";
import { useGetDataForCharts } from "../hooks";
import { PieChart } from "../components/PieChart";

export const Main = () => {

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [abcAnaliz, setAbcAnaliz] = useState("price");
  const { value: clearCash } = useGetDataForCharts(getClearCashForStatistic(currentYear), currentYear);
  const { value: valCash } = useGetDataForCharts(getValCashForStatistic(currentYear), currentYear);
  const { value: dosValCash } = useGetDataForCharts(getDoseValCash(currentYear), currentYear);
  const { value: midResultMarkup } = useGetDataForCharts(getMidResultMarkup(currentYear), currentYear);
  const { value: soldProducts } = useGetDataForCharts(getSoldProducts(currentYear), currentYear);
  const { value: buyersCount } = useGetDataForCharts(getBuyersCount(currentYear), currentYear);
  const { value: midCheck } = useGetDataForCharts(getMidCheck(currentYear), currentYear);
  const { value: checkFulled } = useGetDataForCharts(getFulledCheck(currentYear), currentYear);

  const products = useMemo(() => getProducts(), []);

  const memoAllSumProducts = useMemo(() => {
    return products.reduce((acc, cur) => acc + cur.allSumSold, 0);
  }, [products]);

  const memoProduct = useMemo(() => {
    const newArr = products.map(i => ({
      ...i,
      percent: Math.round(i.allSumSold / memoAllSumProducts * 100),
      newPercent: 0,
    }));
    for (let i = 0; i < newArr.length; i++) {
      const acc = newArr[i]?.percent + newArr[i - 1]?.newPercent;
      newArr[i].newPercent = i === 0 ? newArr[i].percent : acc;
    }
    return newArr.map(i => ({
      ...i,
      group: i.newPercent < 80 ? "A" : i.newPercent > 80 && i.newPercent < 95 ? "B" : "C",
    }));
  }, [memoAllSumProducts, products]);

  return (<div className={classes.container}>
    <div>
      <h1>Новости</h1>
      <Carousel items={news.map(i => (<NewsCard key={i.id} title={i.title} text={i.text} />))} />
    </div>
    <div>
      <h1>Товары</h1>
      <Carousel
        items={getProducts().map(i => (
          <ProductCard key={i.id} name={i.name} price={i.price} iconPath={i.icon} qrcode={i.qrcode} />))} />
    </div>
    <div>
      <div className={classes.statistic}>
        <h1>Статистика</h1>
        <input type="number" min="1900" max={new Date().getFullYear()} step="1" value={currentYear}
               onChange={(e) => setCurrentYear(+e.target.value)} />
      </div>
      <div className={classes.charts}>
        <OneLineChart name={`Товарооборот`} data={clearCash} />
        <OneLineChart name={`Валовая прибль`} data={valCash} />
        <BarChart data={dosValCash} caption={"Доля валовой прибыли"} name={`Доля валовой прибыли`} />
        <BarChart data={midResultMarkup} caption={"Средняя реализованная наценка"}
                  name={`Средняя реализованная наценка`} />
        <BarChart data={soldProducts} caption={"Количество проданного товара"} measurementValue={"Шт."}
                  name={`Количество проданного товара`} />
        <BarChart data={buyersCount} caption={"Количество чеков(покупателей)"}
                  name={`Количество чеков(покупателей)`} measurementValue={"Шт."} />
        <BarChart data={midCheck} caption={"Средний чек"} name={`Средний чек`} measurementValue={"Руб."} />
        <BarChart data={checkFulled} caption={"Наполняемость чека"} name={`Наполняемость чека`}
                  measurementValue={"Шт."} />
        <div className={classes.pieChart}>
          <h3>ABC анализ</h3>
          <select onChange={(e) => setAbcAnaliz(e.target.value)}>
            <option value="price">Цена товара (Руб.)</option>
            <option value="allSumSold">Сумма продаж (Руб.)</option>
            <option value="percent">Доля (%)</option>
            <option value="newPercent">Накопленная доля(%)</option>
          </select>
        </div>
        <PieChart data={memoProduct} dataKey={abcAnaliz} />
      </div>
    </div>
  </div>);
};
