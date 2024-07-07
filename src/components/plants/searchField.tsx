import { FilterX } from "lucide-react";
import { useContext } from "react";
import { FilterContext } from "../../contexts/SearchContext";
import { Button } from "@mui/material";

const SearchField = () => {
  const { search, setSearch, handleFilterReset } = useContext(FilterContext);

  return (
    <div className="flex gap-2 mt-4 max-w-[300px] w-full" id="plant-search-section">
      <input
        type="text"
        placeholder="Search in my plants"
        className="rounded-lg p-2 w-full bg-[#EAEAEA] shadow-inner"
        id="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button
        variant="contained"
        type="button"
        sx={{
          backgroundColor: "#1A4D2E",
          padding: "0.5rem",
          borderRadius: "10px",
          "&:hover": {
            backgroundColor: "#1A4D2E",
          },
        }}
        id="submit-button"
        onClick={() => handleFilterReset()}
      >
        <FilterX size={30} color="white" />
      </Button>
    </div>
  );
};

export default SearchField;
