import classes from "./header.module.scss";

export const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <img src="icons/icon.png" alt="logo" height={56} width={56} />
        <text>АПТЕКА</text>
      </div>
      <div className={classes.search}>
        <input />
      </div>
      <div className={classes.buttons}>
        <span>И. И. ПЕТРОВА</span>
        <button>Выход</button>
      </div>
    </div>
  );
};