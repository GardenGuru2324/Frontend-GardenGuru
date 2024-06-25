import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { routerEnum } from "../../routes/routesEnum";

const SignUpButton = () => {
  return (
    <NavLink to={routerEnum.REGISTER}>
      <Button
        variant="contained"
        sx={{
          width: "100%",
          backgroundColor: "black",
          borderRadius: 2,
          "&:hover": {
            backgroundColor: "black",
          },
        }}
      >
        Register
      </Button>
    </NavLink>
  );
};

export default SignUpButton;
