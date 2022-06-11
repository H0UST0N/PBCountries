import React, { createContext, Dispatch, ReactNode, SetStateAction } from 'react';

import useCountries from '../hooks/useCountries';
import { IGetCountry } from '../services/All';

type CoutriesContextProps = {
  children: ReactNode;
};

type FilterType = "All" | "Name" | "Continent";

type CoutriesContextType = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  dataIsLoaded: boolean;
  setDataIsLoaded: Dispatch<SetStateAction<boolean>>;
  list: IGetCountry[];
  setList: Dispatch<SetStateAction<IGetCountry[]>>;
  filterType: FilterType;
  setFilterType: Dispatch<SetStateAction<FilterType>>;
  filter: string|undefined;
  setFilter: Dispatch<SetStateAction<string|undefined>>;
  onSearch: ()=> void;
  onRefresh: ()=> void;
};

const CountriesContext = createContext<CoutriesContextType>({} as CoutriesContextType);

function CountriesProvider({ children }: CoutriesContextProps) {
  const {
    darkMode, setDarkMode, dataIsLoaded, setDataIsLoaded, list, setList, filterType, setFilterType, filter, setFilter, onSearch, onRefresh
  } = useCountries();

  return (
    <CountriesContext.Provider value={{ darkMode, setDarkMode, dataIsLoaded, setDataIsLoaded, list, setList, filterType, setFilterType, filter, setFilter, onSearch, onRefresh }}>
      {children}
    </CountriesContext.Provider>
  );
}

export { CountriesContext, CountriesProvider };