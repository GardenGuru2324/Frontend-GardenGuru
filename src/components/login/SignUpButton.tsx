import { Button } from "@mui/material";

const SignUpButton = () => {
  return (
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
      Sign Up
    </Button>
  );
};

export default SignUpButton;
