import { BottomNavigationBar } from "./components/ui/bottomNavigation";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyPlantsPage from "./pages/myPlantsPage";
import HomePage from "./pages/homePage";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
	const queryClient = new QueryClient();

	return (
		<div className="flex justify-between flex-col items-center h-screen w-full">
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/myPlants" element={<MyPlantsPage />} />
						<Route path="/profile" element={<ProfilePage />} />
					</Routes>
					<BottomNavigationBar />
				</BrowserRouter>
			</QueryClientProvider>
		</div>
	);
}
