import classes from "./header.module.scss";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <NavLink to="/">
          <img src="icons/icon.png" alt="logo" height={56} width={56} />
        </NavLink>
        <text>АПТЕКА</text>
      </div>
      <div className={classes.search}>
        <input placeholder="Быстрый поиск товаров" />
      </div>
      <div className={classes.buttons}>
        <span>И. И. ПЕТРОВА</span>
        <button>
          <img src="icons/sigin.svg" alt="sigin" />
        </button>
      </div>
    </div>
  );
};