import { FilterX } from "lucide-react";
import { useContext } from "react";
import { Button } from "@mui/material";
import { TrefleFilterContext } from "../../contexts/TrefleFilterContext";

const TrefleFilterResetButton = () => {
  const { handleFilterReset } = useContext(TrefleFilterContext);

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

export default TrefleFilterResetButton;
