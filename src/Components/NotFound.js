import React, { useContext } from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { AuthContext } from "./Contexts/AuthContext";

function NotFound() {
	const { isLoggedIn } = useContext(AuthContext);
	// console.log(isLoggedIn);
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

						{/* <!-- Content Row --> */}

						{/* <!-- Content Row --> */}

						{/* <SecondRowCharts /> */}
						{/* <!-- 404 Error Text --> */}
						<div className="text-center">
							<div
								className="error mx-auto"
								data-text="404"
							>
								404
							</div>
							<p className="lead text-gray-800 mb-5">
								Page Not Found
							</p>
							<p className="text-gray-500 mb-0">
								It looks like you found a glitch in the
								matrix...
							</p>
							<a href="/dashboard">
								&larr; Back to Dashboard
							</a>
						</div>
					</div>
					{/* <!-- /.container-fluid --> */}

					{/* <!-- End of Main Content --> */}
				</div>
				<Footer />
			</div>
		</div>
		// <!-- End of Content Wrapper -->

		// <!-
	);
}

export default NotFound;
