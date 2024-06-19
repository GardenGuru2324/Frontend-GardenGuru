import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const SignInButton = () => {
  return (
    <NavLink to="/">
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
        Log In
      </Button>
    </NavLink>
  );
};

export default SignInButton;
