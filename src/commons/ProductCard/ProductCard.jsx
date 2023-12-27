import classes from "./ProductCard.module.scss";
import { useState } from "react";

export const ProductCard = ({ name, price, iconPath }) => {

  const [isShowQrCode, setIsShowQrCode] = useState(false);

  return (
    <div className={classes.container}>
      <img src={isShowQrCode ? "icons/qrcode.png" : iconPath} alt="icon" height={100} width={100}
           onClick={() => setIsShowQrCode(prev => !prev)} />
      <div className={classes.group}>
        <span>{name}</span>
        <span>{price} руб.</span>
      </div>
    </div>
  );
};