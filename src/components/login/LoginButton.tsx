import { Button } from "@mui/material";

interface LoginButtonProps {
  handleLogin: (event: React.FormEvent) => void;
}

const LoginButton = ({ handleLogin }: LoginButtonProps) => {
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
      onClick={(e) => handleLogin(e)}
    >
      Sign In
    </Button>
  );
};

export default LoginButton;
