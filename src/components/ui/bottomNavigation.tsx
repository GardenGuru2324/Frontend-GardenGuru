import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import { Home, Sprout, UserRound } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { routerEnum } from '../../routes/routesEnum';

export function BottomNavigationBar() {
	const [value, setValue] = useState(0);

	return (
		<Box sx={{ width: '100%', position: 'sticky', bottom: 0 }}>
			<BottomNavigation
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
					console.log(event);
				}}
				sx={{
					borderTopLeftRadius: '50px',
					borderTopRightRadius: '50px',
					backgroundColor: 'rgba(232, 223, 202, 0.80)',
					backdropFilter: 'blur(12px)',
				}}
			>
				<BottomNavigationAction
					id="home-page-navigation-button"
					sx={{
						color: 'black',
						'&.Mui-selected': {
							color: 'white',
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
						color: 'black',
						'&.Mui-selected': {
							color: 'white',
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
						color: 'black',
						'&.Mui-selected': {
							color: 'white',
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
