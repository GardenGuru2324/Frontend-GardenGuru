import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import { createRouter } from './routes/routes';

export default function App() {
	const { isAuthenticated } = useContext(AuthContext);

	const router = createRouter(isAuthenticated);

	const queryClient = new QueryClient();

	return (
		<div className="flex flex-col justify-between items-center min-h-screen h-full w-full bg-customBackground">
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</div>
	);
}
