import LoadingButton from "@mui/lab/LoadingButton";

interface LoginButtonProps {
  loading: boolean;
}

const LoginButton = ({ loading }: LoginButtonProps) => {
  return (
    <LoadingButton
      variant="contained"
      type="submit"
      sx={{
        width: "100%",
        backgroundColor: "#1A4D2E",
        borderRadius: 2,
        "&:hover": {
          backgroundColor: "#1A4D2E",
        },
      }}
      loading={loading}
    >
      Sign In
    </LoadingButton>
  );
};

export default LoginButton;
