import { useContext } from "react";
import { TrefleFilterContext } from "../../contexts/TrefleFilterContext";

const TrefleFilterInputField = () => {
  const { search, setSearch } = useContext(TrefleFilterContext);

  return (
    <input
      type="text"
      placeholder="Search in plants"
      className="rounded-lg p-2 w-full bg-[#EAEAEA] shadow-inner"
      id="search-input"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default TrefleFilterInputField;
