import FilterResetButton from "./filterResetButton";
import FilterInputField from "./filterInputField";

const SearchSection = () => {
  return (
    <div className="flex gap-2 mt-4 md:max-w-[1400px] max-w-[300px] w-full md:px-4" id="plant-search-section">
      <FilterInputField />
      <FilterResetButton />
    </div>
  );
};

export default SearchSection;
