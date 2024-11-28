import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import { useContext, useState } from "react";
import { Button } from "@mui/material";
import { Sprout } from "lucide-react";
import { deleteMyPlantByPlantId } from "../../services/plants/deleteMyPlant";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

interface BottomDetailSectionProps {
  plantId: string;
}

export function BottomDetailSection({ plantId }: BottomDetailSectionProps) {
  const [value, setValue] = useState(0);
  const { userId } = useContext(AuthContext);
  const navigate = useNavigate();

  const deleteMyPlant = async () => {
    await deleteMyPlantByPlantId(userId, plantId);
    navigate("/myPlants");
  };

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
            background: "linear-gradient(to right, #920D0D, #E42424)",
            borderRadius: "30px",
          }}
          startIcon={<Sprout />}
          id="delete-myPlant-button"
          onClick={deleteMyPlant}
        >
          Delete plant
        </Button>
      </BottomNavigation>
    </Box>
  );
}
