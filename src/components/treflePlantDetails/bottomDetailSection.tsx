import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import { useContext, useState } from "react";
import { Button } from "@mui/material";
import { Sprout } from "lucide-react";
import { TreflePlantDetails } from "../../models/treflePlant/treflePlantDetails";
import { NewPlant } from "../../models/plant/newPlant";
import { AuthContext } from "../../contexts/AuthContext";
import { addPlantToMyPlants } from "../../services/plants/addPlant";

interface BottomDetailSectionProps {
  treflePlant: TreflePlantDetails;
  setModal: (modal: boolean) => void;
}

export function BottomDetailSection({ treflePlant, setModal }: BottomDetailSectionProps) {
  const [value, setValue] = useState(0);
  const { userId } = useContext(AuthContext);

  const addTreflePlantToMyPlants = async () => {
    let newPlant: NewPlant = {
      plantName: treflePlant.data.common_name,
      locationId: "1234", // Fix
      plantImage: treflePlant.data.image_url,
      isVegetable: treflePlant.data.vegetable,
      plantGrowthHabit: treflePlant.data.main_species.specifications.growth_habit,
      plantAvgHeight: treflePlant.data.main_species.specifications.average_height.cm,
      plantMaxHeight: treflePlant.data.main_species.specifications.maximum_height.cm,
      plantGrowthRate: treflePlant.data.main_species.specifications.growth_rate,
      plantDaysToHarvest: treflePlant.data.main_species.growth.days_to_harvest,
      plantRowSpacing: treflePlant.data.main_species.growth.row_spacing.cm,
      plantMinTemp: treflePlant.data.main_species.growth.maximum_temperature.deg_c,
      plantMaxTemp: treflePlant.data.main_species.growth.minimum_temperature.deg_c,
      userId: userId,
    };
    await addPlantToMyPlants(newPlant);
    setModal(true);

    setTimeout(() => {
      setModal(false);
    }, 3000);
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
            background: "linear-gradient(to right, #1A4D2E, #4D6E50)",
            borderRadius: "30px",
          }}
          startIcon={<Sprout />}
          id="add-treflePlant-button"
          onClick={addTreflePlantToMyPlants}
        >
          Add plant to my plants
        </Button>
      </BottomNavigation>
    </Box>
  );
}
