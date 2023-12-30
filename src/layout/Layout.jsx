import {Outlet} from "react-router-dom";
import {Header} from "./components";

import classes from "./layout.module.scss";

export const Layout = () => {
  return (
    <div className={classes.container}>
      <Header />
      <Outlet />
    </div>
  );
};
