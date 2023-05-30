"use client";
import { FilterTypes } from "@/@types/filter-types";
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
  search: "",
  page: 0,
  type: FilterTypes.All,
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterTypes) => {},
});

interface ProviderProps {
  children: ReactNode;
}

export const FilterContextProvider = ({ children }: ProviderProps) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [type, setType] = useState(FilterTypes.All);

  return (
    <FilterContext.Provider
      value={{ search, page, type, setPage, setSearch, setType }}
    >
      {children}
    </FilterContext.Provider>
  );
};
