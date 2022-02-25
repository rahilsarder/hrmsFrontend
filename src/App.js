import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Login from "./Components/Login";
import NotFound from "./Components/NotFound";
import Dashboard from "./Pages/Dashboard";
import EditEmployeeProfile from "./Pages/EditEmployeeProfile";
import Employees from "./Pages/Employees";
import EmployeeProfilePage from "./Pages/EmployeeProfilePage";
import UsersList from "./Pages/UsersList";
import EmployeeDashboard from "./Pages/EmployeeDashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import { useState, useContext } from "react";
import EmployeeProtectedRoutes from "./EmployeeProtectedRoutes";
import { AuthContext } from "./Components/Contexts/AuthContext";
import AdminRoutes from "./Routes/AdminRoutes";

function App() {
	const [isLoggedIn, setisLoggedIn] = useState(Boolean);
	const [isAdmin, setIsAdmin] = useState(Boolean);
	const [accessToken, setAccessToken] = useState("");

	return (
		<div className="App">
			<AuthContext.Provider
				value={{
					isLoggedIn,
					setisLoggedIn,
					isAdmin,
					setIsAdmin,
					accessToken,
					setAccessToken,
				}}
			>
				<Routes>
					<Route path="/login" element={<Login />} />

					{/* /////Admin Access Only!///// */}

					<Route element={<ProtectedRoutes />}>
						<Route
							path="/dashboard"
							element={<Dashboard />}
						/>
						<Route
							path="/dashboard/employees"
							element={<Employees />}
						/>
						<Route
							path="/dashboard/employess/:id"
							element={<EmployeeProfilePage />}
						/>
						<Route
							path="/dashboard/employess/:id/edit"
							element={<EditEmployeeProfile />}
						/>
						<Route
							path="/dashboard/users"
							element={<UsersList />}
						/>
					</Route>

					{/* ////Employee Acess Only!//// */}
					<Route element={<EmployeeProtectedRoutes />}>
						<Route
							path="employee/dashboard"
							element={<EmployeeDashboard />}
						/>
					</Route>
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</AuthContext.Provider>
		</div>
	);
}

export default App;
