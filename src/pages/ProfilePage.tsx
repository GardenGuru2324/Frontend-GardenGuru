import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Button } from "@mui/material";

export default function ProfilePage() {
  const { logout } = useContext(AuthContext);
  return (
    <div className="flex justify-center items-center flex-wrap h-screen">
      <Button variant="contained" onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
}
