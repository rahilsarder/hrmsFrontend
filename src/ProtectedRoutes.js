import React, { useState, useContext } from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { AuthContext } from "./Components/Contexts/AuthContext";

function ProtectedRoutes() {
	const location = useLocation();
	const auth = localStorage.getItem("accessToken");
	const role = localStorage.getItem("role");

	if (auth !== null && role == 1) return <Outlet />;
	else if (!role) return <Navigate to="/login" state={{ from: location }} />;
	else if (role == 0) {
		return (
			<Navigate
				to="/employee/dashboard"
				state={{ from: location }}
				replace
			/>
		);
	} else if (auth == null) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}
}

export default ProtectedRoutes;
