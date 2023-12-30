import "normalize.css";

import "./app.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Error, Main} from "./pages";
import {Layout} from "./layout";
import {PageProvider} from "./Providers";

export const App = () => {
  return (
    <PageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index={true} path="/" element={<Main />} />
            <Route path="/*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PageProvider>
  );
};
