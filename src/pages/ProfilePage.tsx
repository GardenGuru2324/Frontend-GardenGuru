import { Button } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';
import { routerEnum } from '../routes/routesEnum';

export default function ProfilePage() {
	const { logout } = useContext(AuthContext);
	return (
		<div className="flex justify-center items-center flex-wrap h-screen">
			<Link to={routerEnum.LOGIN}>
				<Button
					variant="contained"
					onClick={() => logout()}
					id="logout-button"
				>
					Logout
				</Button>
			</Link>
		</div>
	);
}
