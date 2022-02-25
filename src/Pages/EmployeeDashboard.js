import React from "react";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import "../Styles/login.css";
import EmployeeProfile from "./../Components/EmployeeProfile";

function EmployeeDashboard() {
	return (
		<>
			<div id="wrapper">
				<Sidebar />
				<div id="content-wrapper" className="d-flex flex-column">
					{/* <!-- Main Content --> */}
					<div id="content">
						<Topbar />
						<div className="container-fluid">
							{/* <!-- Page Heading --> */}
							<div className="d-sm-flex align-items-center justify-content-between mb-4">
								<h1 className="h3 mb-0 text-gray-800">
									Employee Panel
								</h1>
							</div>
							<EmployeeProfile />
						</div>
					</div>
					<Footer />
				</div>
			</div>
		</>
	);
}

export default EmployeeDashboard;
