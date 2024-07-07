import { FilterX } from "lucide-react";
import { useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import { Button } from "@mui/material";

const FilterResetButton = () => {
  const { handleFilterReset } = useContext(FilterContext);

  return (
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
  );
};

export default FilterResetButton;
