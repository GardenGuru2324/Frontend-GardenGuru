import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function App() {
	return (
		<>
			<div className="flex justify-center items-center h-screen w-screen">
				<Button variant="contained" color="success" size="large" startIcon={<DeleteIcon />}>
					garden Guru
				</Button>
			</div>
		</>
	);
}
