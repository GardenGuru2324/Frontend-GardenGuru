import { createBrowserRouter } from 'react-router-dom';

import Login from '../components/login/login';
import Register from '../components/register/register';
import { BottomNavigationBar } from '../components/ui/bottomNavigation';
import ProfilePage from '../pages/ProfilePage';
import HomePage from '../pages/homePage';
import MyPlantsPage from '../pages/myPlantsPage';

import { routerEnum } from './routesEnum';

export const createRouter = (isAuthenticated: boolean) => {
	return createBrowserRouter([
		{
			path: routerEnum.HOME,
			element: isAuthenticated ? (
				<>
					<HomePage /> <BottomNavigationBar />
				</>
			) : (
				<Login />
			),
		},
		{
			path: routerEnum.REGISTER,
			element: !isAuthenticated ? <Register /> : <HomePage />,
		},
		{
			path: routerEnum.MY_PLANTS,
			element: isAuthenticated ? (
				<>
					<MyPlantsPage /> <BottomNavigationBar />
				</>
			) : (
				<Login />
			),
		},
		{
			path: routerEnum.PROFILE,
			element: isAuthenticated ? (
				<>
					<ProfilePage /> <BottomNavigationBar />
				</>
			) : (
				<Login />
			),
		},
	]);
};
