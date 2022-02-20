import React from "react";
import EmployeeTables from "../Components/EmployeeTables";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";

function Employees() {
	return (
		<div id="wrapper">
			<Sidebar />
			{/* <!-- Content Wrapper --> */}
			<div id="content-wrapper" className="d-flex flex-column">
				{/* <!-- Main Content --> */}
				<div id="content">
					<Topbar />

					{/* <!-- Begin Page Content --> */}
					<div className="container-fluid">
						{/* <!-- Page Heading --> */}
						<div className="d-sm-flex align-items-center justify-content-between mb-4">
							<h1 className="h3 mb-0 text-gray-800">
								Employees
							</h1>
							<a
								href="#"
								className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
							>
								<i className="fas fa-download fa-sm text-white-50"></i>{" "}
								Generate Report
							</a>
						</div>
						{/* <!-- Content Row --> */}

						<EmployeeTables />
						{/* <!-- Content Row --> */}

						{/* <SecondRowCharts /> */}
					</div>
					{/* <!-- /.container-fluid --> */}

					{/* <!-- End of Main Content --> */}
				</div>

				<Footer />
			</div>
		</div>
		// <!-- End of Content Wrapper -->

		// <!-- End of Page Wrapper -->
	);
}

export default Employees;
