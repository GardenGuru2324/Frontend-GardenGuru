import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const SignUpButton = () => {
  return (
    <Link to="/register">
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
        Sign Up
      </Button>
    </Link>
  );
};

export default SignUpButton;
