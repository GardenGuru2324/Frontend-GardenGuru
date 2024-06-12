import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useState } from "react";
import { Home, Sprout, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

export function BottomNavigationBar() {
	const [value, setValue] = useState(0);

	return (
		<Box sx={{ width: "100%", position: "sticky", bottom: 0 }}>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
					console.log(event);
				}}
			>
				<BottomNavigationAction label="Home" icon={<Home />} component={Link} to="/" />
				<BottomNavigationAction
					label="Plants"
					icon={<Sprout />}
					component={Link}
					to="/myPlants"
				/>
				<BottomNavigationAction
					label="Profile"
					icon={<UserRound />}
					component={Link}
					to="/profile"
				/>
			</BottomNavigation>
		</Box>
	);
}
