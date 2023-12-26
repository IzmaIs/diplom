import "normalize.css";

import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Login, Main, Profile, Register } from "./pages";
import { Layout } from "./layout";

export const App = () => {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Profile />} />
        <Route path="/profile" element={<Register />} />
      </Route>
    </Routes>
  </BrowserRouter>);
};
