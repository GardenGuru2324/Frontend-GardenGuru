import { Search } from "lucide-react";

const SearchField = () => {
  return (
    <div className="flex gap-2 mt-4 max-w-[300px] w-full" id="plant-search-section">
      <input
        type="text"
        placeholder="Search in my plants"
        className="rounded-lg p-2 w-full bg-[#EAEAEA] shadow-inner"
        id="saerch-input"
      />
      <button
        type="button"
        className="bg-[#1A4D2E] p-2 rounded-lg drop-shadow-xl transition duration-150 ease-out hover:ease-in hover:scale-105"
        id="submit-button"
      >
        <Search size={30} color="white" />
      </button>
    </div>
  );
};

export default SearchField;
