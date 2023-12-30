import classes from "./modal.module.scss";
import {createPortal} from "react-dom";
import {useEffect} from "react";

export const Modal = ({children, isOpen}) => {
  useEffect(() => {
    if (isOpen) {
      document.getElementById("root").style.overflow = "auto";
    } else {
      document.getElementById("root").style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    isOpen &&
    createPortal(
      <>
        <div className={classes.container}>{children}</div>
        <div className={classes.backdrop} />
      </>,
      document.body,
    )
  );
};
