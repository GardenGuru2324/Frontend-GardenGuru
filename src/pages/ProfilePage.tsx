import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { routerEnum } from "../routes/routesEnum";
import useUserProfile from "../hooks/useUserProfile";
import Loading from "../components/ui/loading";
import ErrorPage from "../components/errors/errorPage";

export default function ProfilePage() {
  const { logout, userId } = useContext(AuthContext);
  const { profile, isLoading, isError, error } = useUserProfile(userId);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-svh">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      // fix div weg bij errorPage en altijd div in de if over al doen!!
      <div className="flex items-center justify-center h-svh">
        <ErrorPage error={error} />
      </div>
    );
  }

  return (
    <div>
      <div className="w-svw h-64 bg-[#E8DFCA] flex justify-center items-center flex-col">
        <div
          className="mb-4 rounded-full max-w-[150px] max-h-[150px] w-full h-full bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${profile?.profilePicture})` }}
        ></div>
        <p className="text-black font-bold">Edit profile image</p>
      </div>

      <div className="px-8 py-4">
        <div className="leading-10 border-b-[0.5px] border-[#929292] px-4 py-2">
          <p className="text-black font-bold uppercase">Name</p>
          <p>{profile?.fullName}</p>
        </div>
        <div className="leading-10 border-b-[0.5px] border-[#929292] px-4 py-2">
          <p className="text-black font-bold uppercase">Email</p>
          <p>{profile?.email}</p>
        </div>
        <div className="leading-10 border-b-[0.5px] border-[#929292] px-4 py-2">
          <p className="text-black font-bold uppercase">User name</p>
          <p>@{profile?.userName}</p>
        </div>
        <div className="leading-10 border-b-[0.5px] border-[#929292] px-4 py-2">
          <p className="text-black font-bold uppercase">Active since</p>
          <p>{new Date(profile!.accountCreated).toLocaleDateString()}</p>
        </div>
        <div className="px-4 py-4">
          <Link to={routerEnum.LOGIN}>
            <Button variant="contained" onClick={() => logout()} id="logout-button" className="w-full" color="error">
              Logout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
