import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const SignUpButton = () => {
  return (
    <NavLink to="/register">
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
