import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { createRouter } from "./routes/routes";

export default function App() {
  const { isAuthenticated } = useContext(AuthContext);

  const router = createRouter(isAuthenticated);

  const queryClient = new QueryClient();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-full w-full bg-customBackground flex-1">
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </div>
    </div>
  );
}
