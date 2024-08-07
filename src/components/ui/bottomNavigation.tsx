import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useEffect, useState } from "react";
import { Home, Sprout, UserRound } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { routerEnum } from "../../routes/routesEnum";

const pathToIndex = {
  [routerEnum.HOME]: 0,
  [routerEnum.MY_PLANTS]: 1,
  [routerEnum.PROFILE]: 2,
};

export function BottomNavigationBar() {
  const location = useLocation();
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(pathToIndex[location.pathname] || 0);
  }, [location.pathname]);

  return (
    <Box sx={{ maxWidth: "1400px", width: "100%", position: "sticky", bottom: 0 }}>
      <BottomNavigation
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          borderTopLeftRadius: "50px",
          borderTopRightRadius: "50px",
          backgroundColor: "rgba(232, 223, 202, 0.80)",
          backdropFilter: "blur(12px)",
        }}
      >
        <BottomNavigationAction
          id="home-page-navigation-button"
          sx={{
            color: "black",
            "&.Mui-selected": {
              color: "white",
            },
          }}
          label="Home"
          icon={<Home />}
          component={NavLink}
          to={routerEnum.HOME}
        />
        <BottomNavigationAction
          id="myPlants-page-navigation-button"
          sx={{
            color: "black",
            "&.Mui-selected": {
              color: "white",
            },
          }}
          label="My Plants"
          icon={<Sprout />}
          component={NavLink}
          to={routerEnum.MY_PLANTS}
        />
        <BottomNavigationAction
          id="profile-page-navigation-button"
          sx={{
            color: "black",
            "&.Mui-selected": {
              color: "white",
            },
          }}
          label="Profile"
          icon={<UserRound />}
          component={NavLink}
          to={routerEnum.PROFILE}
        />
      </BottomNavigation>
    </Box>
  );
}
