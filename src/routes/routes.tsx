import { createBrowserRouter } from "react-router-dom";
import MyPlantsPage from "../pages/myPlantsPage";
import ProfilePage from "../pages/profilePage";
import { BottomNavigationBar } from "../components/ui/bottomNavigation";
import { routerEnum } from "./routesEnum";
import Login from "../components/login/login";
import Register from "../components/register/register";
import MyPlantsDetailPage from "../pages/myPlantDetails";
import TreflePlantsPage from "../pages/treflePlantsPage";
import TreflePlantDetailPage from "../pages/treflePlantDetails";

export const createRouter = (isAuthenticated: boolean) => {
  return createBrowserRouter([
    {
      path: routerEnum.HOME,
      element: isAuthenticated ? (
        <>
          <TreflePlantsPage /> <BottomNavigationBar />
        </>
      ) : (
        <Login />
      ),
    },
    {
      path: routerEnum.REGISTER,
      element: !isAuthenticated ? <Register /> : <TreflePlantsPage />,
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
    {
      path: routerEnum.MY_PLANT_DETAILS,
      element: isAuthenticated ? (
        <>
          <MyPlantsDetailPage />
        </>
      ) : (
        <Login />
      ),
    },
    {
      path: routerEnum.TREFLE_PLANT_DETAILS,
      element: isAuthenticated ? (
        <>
          <TreflePlantDetailPage />
        </>
      ) : (
        <Login />
      ),
    },
  ]);
};
