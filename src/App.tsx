import { BottomNavigationBar } from './components/ui/bottomNavigation';
import { QueryClient, QueryClientProvider } from 'react-query';
import HomePage from './pages/homePage';

export default function App() {
	const queryClient = new QueryClient();
	return (
		<div className="flex justify-between flex-col items-center h-screen w-full">
			<QueryClientProvider client={queryClient}>
				<HomePage />
				<BottomNavigationBar />
			</QueryClientProvider>
		</div>
	);
}
