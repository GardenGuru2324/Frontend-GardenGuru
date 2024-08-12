import React, { useState } from "react";

interface ITrefleFilterContext {
  search: string;
  setSearch: (search: string) => void;
  handleFilterReset: () => void;
}

export const TrefleFilterContext = React.createContext<ITrefleFilterContext>({
  search: "",
  setSearch: () => {},
  handleFilterReset: () => {},
});

export const TrefleFilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [search, setSearch] = useState<string>("");
  const handleFilterReset = () => {
    setSearch("");
  };
  return (
    <TrefleFilterContext.Provider value={{ search, setSearch, handleFilterReset }}>
      {children}
    </TrefleFilterContext.Provider>
  );
};
