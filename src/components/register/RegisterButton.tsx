import { Button } from "@mui/material";

const RegisterButton = () => {
  return (
    <Button
      type="submit"
      variant="contained"
      sx={{
        width: "100%",
        backgroundColor: "#1A4D2E",
        borderRadius: 2,
        "&:hover": {
          backgroundColor: "#1A4D2E",
        },
      }}
    >
      Sign Up
    </Button>
  );
};

export default RegisterButton;
