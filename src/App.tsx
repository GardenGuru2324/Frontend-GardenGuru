import { BottomNavigationBar } from "./components/ui/bottomNavigation";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyPlantsPage from "./pages/myPlantsPage";
import HomePage from "./pages/homePage";
import ProfilePage from "./pages/ProfilePage";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import Login from "./components/login/Login";

export default function App() {
	const { isAuthenticated } = useContext(AuthContext);

	const queryClient = new QueryClient();

	return (
		<div className="flex justify-between flex-col items-center h-screen w-full bg-customBackground">
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					{!isAuthenticated ? (<Login/>) :
					(
						<>
							<Routes>
								<Route path="/" element={<HomePage />} />
								<Route path="/myPlants" element={<MyPlantsPage />} />
								<Route path="/profile" element={<ProfilePage />} />
							</Routes>
							<BottomNavigationBar />
						</>
					)}
					
				</BrowserRouter>
			</QueryClientProvider>
		</div>
	);
}
