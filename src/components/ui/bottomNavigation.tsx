import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useState } from 'react';
import { Home, Sprout, UserRound } from 'lucide-react';

export function BottomNavigationBar() {
	const [value, setValue] = useState(0);

	return (
		<Box sx={{ width: '100%', position: 'sticky', bottom: 0 }}>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
			>
				<BottomNavigationAction label="Home" icon={<Home />} />
				<BottomNavigationAction label="Plants" icon={<Sprout />} />
				<BottomNavigationAction label="Profile" icon={<UserRound />} />
			</BottomNavigation>
		</Box>
	);
}
