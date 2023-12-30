import classes from "./main.module.scss";
import {
  BarChart,
  Carousel,
  OneLineChart,
  PieChartForAbcAnalysis,
  PieChartForXyzAnalysis,
} from "../components";
import {NewsCard, ProductCard} from "../commons";
import {news} from "./consts";
import {usePageProvider} from "../Providers";

const curYear = new Date().getFullYear();

export const Main = () => {
  const {
    memoProduct,
    currentYear,
    memoSetCurrentYear,
    clearCash,
    valCash,
    dosValCash,
    midResultMarkup,
    soldProducts,
    buyersCount,
    midCheck,
    checkFulled,
    memoSetAbcAnalysis,
    abcAnalysis,
    user,
  } = usePageProvider();

  return (
    <div className={classes.container}>
      <div>
        <h1>Новости</h1>
        <Carousel
          items={news.map((i) => (
            <NewsCard key={i.id} title={i.title} text={i.text} />
          ))}
        />
      </div>
      <div>
        <h1>Товары</h1>
        <Carousel
          items={memoProduct.map((i) => (
            <ProductCard
              key={i.id}
              name={i.name}
              price={i.price}
              iconPath={i.icon}
              qrcode={i.qrcode}
            />
          ))}
        />
      </div>
      {user && (
        <div>
          <div className={classes.statistic}>
            <h1>Статистика</h1>
            <input
              type="number"
              min="1900"
              max={curYear}
              step="1"
              value={currentYear}
              onChange={(e) => memoSetCurrentYear(+e.target.value)}
            />
          </div>
          <div className={classes.charts}>
            <OneLineChart name={`Товарооборот`} data={clearCash} />
            <OneLineChart name={`Валовая прибль`} data={valCash} />
            <BarChart
              data={dosValCash}
              caption={"Доля валовой прибыли"}
              name={`Доля валовой прибыли`}
            />
            <BarChart
              data={midResultMarkup}
              caption={"Средняя реализованная наценка"}
              name={`Средняя реализованная наценка`}
            />
            <BarChart
              data={soldProducts}
              caption={"Количество проданного товара"}
              measurementValue={"Шт."}
              name={`Количество проданного товара`}
            />
            <BarChart
              data={buyersCount}
              caption={"Количество чеков(покупателей)"}
              name={`Количество чеков(покупателей)`}
              measurementValue={"Шт."}
            />
            <BarChart
              data={midCheck}
              caption={"Средний чек"}
              name={`Средний чек`}
              measurementValue={"Руб."}
            />
            <BarChart
              data={checkFulled}
              caption={"Наполняемость чека"}
              name={`Наполняемость чека`}
              measurementValue={"Шт."}
            />
            <div className={classes.pieChart}>
              <h3>ABC анализ</h3>
              <select onChange={(e) => memoSetAbcAnalysis(e.target.value)}>
                <option value="price">Цена товара (Руб.)</option>
                <option value="allSumSold">Сумма продаж (Руб.)</option>
                <option value="share">Доля (%)</option>
                <option value="accShare">Накопленная доля(%)</option>
              </select>
            </div>
            <PieChartForAbcAnalysis data={memoProduct} dataKey={abcAnalysis} />
            <h3>XYZ анализ</h3>
            <PieChartForXyzAnalysis data={memoProduct} />
          </div>
        </div>
      )}
    </div>
  );
};
