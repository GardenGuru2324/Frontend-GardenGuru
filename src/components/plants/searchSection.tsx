import FilterResetButton from "./filterResetButton";
import FilterInputField from "./filterInputField";

const SearchSection = () => {
  return (
    <div className="flex gap-2 mt-4 max-w-[300px] w-full" id="plant-search-section">
      <FilterInputField />
      <FilterResetButton />
    </div>
  );
};

export default SearchSection;
