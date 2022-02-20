import React from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function NotFound() {
	return (
		<div id="wrapper">
			<Sidebar />
			{/* <!-- Content Wrapper --> */}
			<div id="content-wrapper" classNameName="d-flex flex-column">
				{/* <!-- Main Content --> */}
				<div id="content">
					<Topbar />

					{/* <!-- Begin Page Content --> */}
					<div classNameName="container-fluid">
						{/* <!-- Page Heading --> */}

						{/* <!-- Content Row --> */}

						{/* <!-- Content Row --> */}

						{/* <SecondRowCharts /> */}
						<div className="container-fluid">
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
									It looks like you found a glitch in
									the matrix...
								</p>
								<a href="/dashboard">
									&larr; Back to Dashboard
								</a>
							</div>
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
