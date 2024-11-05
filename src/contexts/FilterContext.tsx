import React, { useState } from "react";

interface IFilterContext {
  search: string;
  setSearch: (search: string) => void;
  handleFilterReset: () => void;
  page: number;
  setPage: (page: number) => void;
}

export const FilterContext = React.createContext<IFilterContext>({
  search: "",
  setSearch: () => {},
  handleFilterReset: () => {},
  page: 1,
  setPage: () => {},
});

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const handleFilterReset = () => {
    setSearch("");
  };
  return <FilterContext.Provider value={{ search, setSearch, handleFilterReset, page, setPage }}>{children}</FilterContext.Provider>;
};
