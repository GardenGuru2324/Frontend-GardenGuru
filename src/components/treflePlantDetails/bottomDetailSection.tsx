import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import { useState } from "react";
import { Button } from "@mui/material";
import { Sprout } from "lucide-react";

export function BottomDetailSection() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ maxWidth: "1400px", width: "100%" }}>
      <BottomNavigation
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          display: "grid",
          placeItems: "center",
          borderTopLeftRadius: "50px",
          borderTopRightRadius: "50px",
          backgroundColor: "rgba(232, 223, 202, 0.80)",
          backdropFilter: "blur(12px)",
        }}
      >
        <Button
          variant="contained"
          sx={{
            height: "60%",
            minWidth: "300px",
            width: "100%",
            background: "linear-gradient(to right, #1A4D2E, #4D6E50)",
            borderRadius: "30px",
          }}
          startIcon={<Sprout />}
          id="add-treflePlant-button"
        >
          Add plant to my plants
        </Button>
      </BottomNavigation>
    </Box>
  );
}
