import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { routerEnum } from '../../routes/routesEnum';

const SignInButton = () => {
	return (
		<NavLink to={routerEnum.LOGIN}>
			<Button
				variant="contained"
				sx={{
					width: '100%',
					backgroundColor: 'black',
					borderRadius: 2,
					'&:hover': {
						backgroundColor: 'black',
					},
				}}
			>
				Log In
			</Button>
		</NavLink>
	);
};

export default SignInButton;
