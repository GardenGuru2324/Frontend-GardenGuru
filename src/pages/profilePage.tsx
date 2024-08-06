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
      <div className="flex items-center justify-center h-svh">
        <ErrorPage error={error} />
      </div>
    );
  }

  return (
    <div>
      <div
        id="top-section-profile-page"
        className="w-svw max-w-[1400px] h-64 bg-[#E8DFCA] flex justify-center items-center flex-col"
      >
        <div
          className="mb-4 rounded-full max-w-[150px] max-h-[150px] w-full h-full bg-cover bg-no-repeat bg-center"
          id="profile-picture"
          style={{ backgroundImage: `url(${profile!.profilePicture})` }}
        ></div>
        <Button disabled variant="contained" className="font-bold" id="edit-profile-picture-button">
          Edit profile image
        </Button>
      </div>

      <div id="info-section-profile-page" className="px-8 py-4">
        <div className="leading-10 border-b-[0.5px] border-[#929292] px-4 py-2">
          <p className="text-black font-bold uppercase">Name</p>
          <p>{profile?.fullName}</p>
        </div>
        <div className="leading-10 border-b-[0.5px] border-[#929292] px-4 py-2">
          <p className="text-black font-bold uppercase">Email</p>
          <p>{profile?.email}</p>
        </div>
        <div className="leading-10 border-b-[0.5px] border-[#929292] px-4 py-2">
          <p className="text-black font-bold uppercase">Active since</p>
          <p>{new Date(profile!.accountCreated).toLocaleDateString()}</p>
        </div>
        <div className="px-4 py-4">
          <Link to={routerEnum.LOGIN}>
            <Button
              variant="contained"
              onClick={() => logout()}
              id="logout-button"
              sx={{ backgroundColor: "#1A4D2E", width: "100%" }}
            >
              Logout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
