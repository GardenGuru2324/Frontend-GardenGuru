import { BottomNavigationBar } from './components/ui/bottomNavigation';
import HomePage from './pages/homePage';

export default function App() {
	return (
		<div className="flex justify-between flex-col items-center h-screen w-full">
			<HomePage />
			<BottomNavigationBar />
		</div>
	);
}
