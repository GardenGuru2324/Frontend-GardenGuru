import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useState } from "react";
import { Home, Sprout, UserRound } from "lucide-react";
import { NavLink } from "react-router-dom";

export function BottomNavigationBar() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: "100%", position: "sticky", bottom: 0 }}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(event);
        }}
        sx={{
          borderTopLeftRadius: "50px",
          borderTopRightRadius: "50px",
          backgroundColor: "rgba(232, 223, 202, 0.80)",
          backdropFilter: "blur(12px)",
        }}
      >
        <BottomNavigationAction
          sx={{
            color: "black",
            "&.Mui-selected": {
              color: "white",
            },
          }}
          label="Home"
          icon={<Home />}
          component={NavLink}
          to="/"
        />
        <BottomNavigationAction
          sx={{
            color: "black",
            "&.Mui-selected": {
              color: "white",
            },
          }}
          label="Plants"
          icon={<Sprout />}
          component={NavLink}
          to="/myPlants"
        />
        <BottomNavigationAction
          sx={{
            color: "black",
            "&.Mui-selected": {
              color: "white",
            },
          }}
          label="Profile"
          icon={<UserRound />}
          component={NavLink}
          to="/profile"
        />
      </BottomNavigation>
    </Box>
  );
}
