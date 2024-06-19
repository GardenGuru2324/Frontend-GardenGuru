import { createBrowserRouter } from "react-router-dom";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import HomePage from "../pages/homePage";
import MyPlantsPage from "../pages/myPlantsPage";
import ProfilePage from "../pages/ProfilePage";
import { BottomNavigationBar } from "../components/ui/bottomNavigation";

export const createRouter = (isAuthenticated: boolean) => {
  return createBrowserRouter([
    {
      path: "/",
      element: isAuthenticated ? (
        <>
          <HomePage /> <BottomNavigationBar />
        </>
      ) : (
        <Login />
      ),
    },
    {
      path: "/register",
      element: !isAuthenticated ? <Register /> : <HomePage />,
    },
    {
      path: "/myPlants",
      element: isAuthenticated ? (
        <>
          <MyPlantsPage /> <BottomNavigationBar />
        </>
      ) : (
        <Login />
      ),
    },
    {
      path: "/profile",
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
