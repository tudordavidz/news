import { useCallback, useState } from "react";
import CountryList from "@/constants/CountryList";

export const useNewsCountries = () => {
  const [newsCountries, setUseNewsCountries] = useState(CountryList);

  const toggleNewsCountry = useCallback((id: number) => {
    setUseNewsCountries((prevNewsCountries) => {
      return prevNewsCountries.map((item, index) => {
        if (index === id) {
          return {
            ...item,
            selected: !item.selected,
          };
        }
        return item;
      });
    });
  }, []);

  return {
    newsCountries,
    toggleNewsCountry,
  };
};
