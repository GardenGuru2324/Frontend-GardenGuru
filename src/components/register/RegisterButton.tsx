import LoadingButton from "@mui/lab/LoadingButton";

interface RegisterButtonProps {
  loading: boolean;
}

const RegisterButton = ({ loading }: RegisterButtonProps) => {
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
      Sign Up
    </LoadingButton>
  );
};

export default RegisterButton;
