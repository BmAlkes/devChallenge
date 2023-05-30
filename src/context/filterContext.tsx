"use client";
import { FilterTypes } from "@/@types/filter-types";
import { PriorityTypes } from "@/@types/priority-types";
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
  search: "",
  page: 0,
  type: FilterTypes.All,
  priority: PriorityTypes.NEWS,
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterTypes) => {},
  setPriority: (value: PriorityTypes) => {},
});

interface ProviderProps {
  children: ReactNode;
}

export const FilterContextProvider = ({ children }: ProviderProps) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [type, setType] = useState(FilterTypes.All);
  const [priority, setPriority] = useState(PriorityTypes.NEWS);

  return (
    <FilterContext.Provider
      value={{
        search,
        page,
        type,
        setPage,
        setSearch,
        setType,
        priority,
        setPriority,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
