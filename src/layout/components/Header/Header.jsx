import classes from "./header.module.scss";
import {NavLink} from "react-router-dom";
import {usePageProvider} from "../../../Providers";
import {memo, useEffect, useRef, useState} from "react";
import {Modal, ProductCard} from "../../../commons";

export const Header = memo(() => {
  const {memoProduct, user, memoSetUser} = usePageProvider();
  const [searchValue, setSearchValue] = useState();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [sign, setSign] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const ref2 = useRef();
  const [error, setError] = useState();
  const title = useRef("АПТЕКА");

  useEffect(() => {
    if (window.innerWidth < 835) {
      title.current = "";
    }
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (ref?.current?.contains(e.target) || ref2?.current?.contains(e.target)) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [ref]);

  useEffect(() => {
    if (!isOpenModal) {
      setError(null);
    }
  }, [isOpenModal]);

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <NavLink to="/">
          <img src="icons/icon.png" alt="logo" height={56} width={56} />
        </NavLink>
        <span>{title.current}</span>
      </div>
      <div ref={ref}>
        <div className={classes.search}>
          <input
            onFocus={() => setIsOpen(true)}
            placeholder="Быстрый поиск товаров"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className={classes.searchBlock} ref={ref2}>
          {memoProduct
            .filter((i) => i.name.toLowerCase().includes(searchValue?.toLowerCase()))
            .map((i) => {
              return (
                isOpen && (
                  <ProductCard
                    key={i.id}
                    name={i.name}
                    iconPath={i.icon}
                    qrcode={i.qrcode}
                    price={i.price}
                    ABCgroup={i.ABCgroup}
                    XYZgroup={i.XYZgroup}
                  />
                )
              );
            })}
        </div>
      </div>
      <div className={classes.buttons}>
        <span>{user?.fullName}</span>
        <button
          onClick={() => {
            if (user) {
              memoSetUser(null);
            } else {
              setIsOpenModal(true);
            }
          }}
        >
          <img src={user ? "icons/signout.svg" : "icons/sigin.svg"} alt="sigin" />
        </button>
        <Modal isOpen={isOpenModal}>
          <div className={classes.login}>
            <span>Логин</span>
            <input
              onChange={(e) => {
                error && setError(null);
                setSign((prev) => ({...prev, login: e.target.value}));
              }}
            />
          </div>
          <div className={classes.password}>
            <span>Пароль</span>
            <input
              onChange={(e) => {
                error && setError(null);
                setSign((prev) => ({...prev, password: e.target.value}));
              }}
            />
          </div>
          <div className={classes.modalButtons}>
            <button onClick={() => setIsOpenModal(false)}>Закрыть</button>
            <button
              onClick={() => {
                if (memoSetUser(sign)) {
                  setIsOpenModal(false);
                  memoSetUser(sign);
                } else {
                  setError("Неверный логин или пароль!");
                }
              }}
            >
              {" "}
              Войти
            </button>
          </div>
          <div className={classes.error}>{error}</div>
        </Modal>
      </div>
    </div>
  );
});
