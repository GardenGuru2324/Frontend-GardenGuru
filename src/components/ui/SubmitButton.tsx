import LoadingButton from "@mui/lab/LoadingButton";

interface SubmitButtonProps {
  text: string;
  loading: boolean;
}

const SubmitButton = ({ loading, text }: SubmitButtonProps) => {
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
      {text}
    </LoadingButton>
  );
};

export default SubmitButton;
