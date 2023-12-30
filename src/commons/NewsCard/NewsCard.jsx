import classes from "./newsCard.module.scss";

export const NewsCard = ({title, text}) => {
  return (
    <div className={classes.container}>
      <h3>{title}</h3>
      <span>{text}</span>
    </div>
  );
};
