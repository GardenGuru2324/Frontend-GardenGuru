import React, { useState } from "react";

interface IFilterContext {
  search: string;
  setSearch: (search: string) => void;
  handleFilterReset: () => void;
}

export const FilterContext = React.createContext<IFilterContext>({
  search: "",
  setSearch: () => {},
  handleFilterReset: () => {},
});

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [search, setSearch] = useState<string>("");
  const handleFilterReset = () => {
    setSearch("");
  };
  return <FilterContext.Provider value={{ search, setSearch, handleFilterReset }}>{children}</FilterContext.Provider>;
};
