import { useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";

const FilterInputField = () => {
  const { search, setSearch } = useContext(FilterContext);

  return (
    <input
      type="text"
      placeholder="Search in my plants"
      className="rounded-lg p-2 w-full bg-[#EAEAEA] shadow-inner"
      id="search-input"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default FilterInputField;
