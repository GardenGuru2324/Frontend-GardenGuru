import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const SignInButton = () => {
  return (
    <Link to="/">
      <Button
        variant="contained"
        sx={{
          width: "100%",
          backgroundColor: "black",
          borderRadius: 2,
          "&:hover": {
            backgroundColor: "black",
          },
          padding: 1,
        }}
      >
        Sign In
      </Button>
    </Link>
  );
};

export default SignInButton;
