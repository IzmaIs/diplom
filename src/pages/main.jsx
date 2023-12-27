import classes from "./main.module.scss";
import { Carousel, OneLineChart } from "../components";
import { NewsCard, ProductCard } from "../commons";
import { getDataForStatistic, news, products } from "./consts";
import { useEffect, useState } from "react";

export const Main = () => {

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const [data, setData] = useState(getDataForStatistic(currentYear));

  useEffect(() => {
    setData(getDataForStatistic(currentYear));
  }, [currentYear]);

  return (
    <div className={classes.container}>
      <div>
        <h1>Новости</h1>
        <Carousel items={news.map(i => (
          <NewsCard key={i.id} title={i.title} text={i.text} />
        ))} />
      </div>
      <div>
        <h1>Товары</h1>
        <Carousel items={products.map(i => (
          <ProductCard key={i.id} name={i.name} price={i.price} iconPath={i.icon} />
        ))} />
      </div>
      <div>
        <div className={classes.statistic}>
          <h1>Статистика</h1>
          <input type="number" min="1900" max={new Date().getFullYear()} step="1" value={currentYear}
                 onChange={(e) => setCurrentYear(+e.target.value)} />
        </div>
        <OneLineChart currentYear={currentYear} data={data} />
      </div>
    </div>
  );
};
