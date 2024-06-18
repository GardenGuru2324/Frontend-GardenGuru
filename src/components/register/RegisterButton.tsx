import { Button } from "@mui/material";

interface RegisterButtonProps {
  handleRegister: (event: React.FormEvent) => void;
}

const RegisterButton = ({ handleRegister }: RegisterButtonProps) => {
  return (
    <Button
      variant="contained"
      sx={{
        width: "100%",
        backgroundColor: "#1A4D2E",
        borderRadius: 2,
        "&:hover": {
          backgroundColor: "#14522C",
        },
      }}
      onClick={(e) => handleRegister(e)}
    >
      Sign Up
    </Button>
  );
};

export default RegisterButton;
