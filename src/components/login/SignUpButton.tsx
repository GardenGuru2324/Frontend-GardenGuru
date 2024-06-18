import { Button } from "@mui/material";

const SignUpButton = () => {
	return (
		<Button
		    variant="contained"
			sx={{ 
				width: '100%', 
				backgroundColor: '#1A4D2E', 
				borderRadius: 2,
				'&:hover': {
					backgroundColor: '#14522C',
				},
			}}
		>
			Sign Up
		</Button>
	);
};

export default SignUpButton;