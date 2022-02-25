import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Employees from "../Pages/Employees";
import EmployeeProfilePage from "../Pages/EmployeeProfilePage";
import EditEmployeeProfile from "../Pages/EditEmployeeProfile";
import UsersList from "../Pages/UsersList";
import NotFound from "../Components/NotFound";

function AdminRoutes() {
	return (
		<>
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/dashboard/employess" element={<Employees />} />
			<Route
				path="/dashboard/employess/:id"
				element={<EmployeeProfilePage />}
			/>
			<Route
				path="/dashboard/employess/:id/edit"
				element={<EditEmployeeProfile />}
			/>
			<Route path="/dashboard/users" element={<UsersList />} />
		</>
	);
}

export default AdminRoutes;
