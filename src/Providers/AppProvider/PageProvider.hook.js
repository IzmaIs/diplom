import {useContext} from "react";

import {Context} from "./PageProvider.context";

export const usePageProvider = () => {
  return useContext(Context);
};
