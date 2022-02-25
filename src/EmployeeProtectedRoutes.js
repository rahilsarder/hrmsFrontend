import React, { useContext } from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { AuthContext } from "./Components/Contexts/AuthContext";

function EmployeeProtectedRoutes() {
	const location = useLocation();
	const auth = localStorage.getItem("accessToken");
	const role = localStorage.getItem("role");

	if (auth !== null && role == 0) return <Outlet />;
	else return <Navigate to="/dashboard" state={{ from: location }} />;
}

export default EmployeeProtectedRoutes;
