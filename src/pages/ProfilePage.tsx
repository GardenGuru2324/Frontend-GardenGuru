import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  const { logout } = useContext(AuthContext);
  return (
    <div className="flex justify-center items-center flex-wrap h-screen">
      <Link to="/">
        <Button variant="contained" onClick={() => logout()}>
          Logout
        </Button>
      </Link>
    </div>
  );
}
