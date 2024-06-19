import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex justify-center items-center flex-wrap h-screen">
      <p>HomePage</p>
      <Outlet />
    </div>
  );
}
