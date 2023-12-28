import classes from "./main.module.scss";
import { BarChart, Carousel, OneLineChart } from "../components";
import { NewsCard, ProductCard } from "../commons";
import { news, products } from "./consts";
import { useState } from "react";

import {
  getBuyersCount,
  getClearCashForStatistic,
  getDoseValCash,
  getFulledCheck,
  getMidCheck,
  getMidResultMarkup,
  getSoldProducts,
  getValCashForStatistic,
} from "../helpers";
import { useGetDataForCharts } from "../hooks";

export const Main = () => {

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const { value: clearCash } = useGetDataForCharts(getClearCashForStatistic(currentYear), currentYear);
  const { value: valCash } = useGetDataForCharts(getValCashForStatistic(currentYear), currentYear);
  const { value: dosValCash } = useGetDataForCharts(getDoseValCash(currentYear), currentYear);
  const { value: midResultMarkup } = useGetDataForCharts(getMidResultMarkup(currentYear), currentYear);
  const { value: soldProducts } = useGetDataForCharts(getSoldProducts(currentYear), currentYear);
  const { value: buyersCount } = useGetDataForCharts(getBuyersCount(currentYear), currentYear);
  const { value: midCheck } = useGetDataForCharts(getMidCheck(currentYear), currentYear);
  const { value: checkFulled } = useGetDataForCharts(getFulledCheck(currentYear), currentYear);

  return (<div className={classes.container}>
    <div>
      <h1>Новости</h1>
      <Carousel items={news.map(i => (<NewsCard key={i.id} title={i.title} text={i.text} />))} />
    </div>
    <div>
      <h1>Товары</h1>
      <Carousel
        items={products.map(i => (
          <ProductCard key={i.id} name={i.name} price={i.price} iconPath={i.icon} qrcode={i.qrcode} />))} />
    </div>
    <div>
      <div className={classes.statistic}>
        <h1>Статистика</h1>
        <input type="number" min="1900" max={new Date().getFullYear()} step="1" value={currentYear}
               onChange={(e) => setCurrentYear(+e.target.value)} />
      </div>
      <div className={classes.charts}>
        <OneLineChart name={`Товарооборот за ${currentYear}`} data={clearCash} />
        <OneLineChart name={`Валовая прибль за ${currentYear}`} data={valCash} />
        <BarChart data={dosValCash} caption={"Доля валовой прибыли"} />
        <BarChart data={midResultMarkup} caption={"Средняя реализованная наценка"} />
        <BarChart data={soldProducts} caption={"Количество проданного товара"} />
        <BarChart data={buyersCount} caption={"Количество чеков(покупателей)"} />
        <BarChart data={midCheck} caption={"Средний чек"} />
        <BarChart data={checkFulled} caption={"Наполняемость чека"} />
      </div>
    </div>
  </div>);
};
