import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import NotFound from "./Components/NotFound";
import Dashboard from "./Pages/Dashboard";
import Employees from "./Pages/Employees";
import ProfilePage from "./Pages/ProfilePage";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route
						path="/dashboard/employees"
						element={<Employees />}
					/>
					<Route
						path="/dashboard/employees/:id"
						element={<ProfilePage />}
					/>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
