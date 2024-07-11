import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { routerEnum } from "../routes/routesEnum";

export default function ProfilePage() {
  const { logout } = useContext(AuthContext);
  return (
    <div className="m-auto">
      <Link to={routerEnum.LOGIN}>
        <Button variant="contained" onClick={() => logout()} id="logout-button">
          Logout
        </Button>
      </Link>
    </div>
  );
}
