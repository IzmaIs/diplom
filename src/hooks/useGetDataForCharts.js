import {useEffect, useState} from "react";

export const useGetDataForCharts = (initialValue, currentYear) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [currentYear]);

  return {value};
};
