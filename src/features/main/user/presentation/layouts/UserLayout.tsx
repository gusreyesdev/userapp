import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export const UserLayout = () => {
  return (
    <div className="h-screen">
      <NavBar />
      <Outlet />
    </div>
  );
};
