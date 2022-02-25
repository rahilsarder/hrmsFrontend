import React, { useState, useContext } from "react";
import axios from "axios";
import "../Styles/login.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Contexts/AuthContext";

function Topbar() {
	const { accessToken, setAccessToken } = useContext(AuthContext);
	const [expanded, setExpanded] = useState(true);
	const [show, setShow] = useState("");

	const [search, setSearch] = useState("");

	const navigate = useNavigate();

	const dropdown = (e) => {
		e.preventDefault();
		setExpanded(!expanded);
		if (expanded == true) {
			setShow("show");
		} else {
			setShow("");
		}
		console.log(expanded);
	};

	const url = "http://localhost:8000/api/";

	// const token = JSON.stringify(localStorage.getItem("accessToken"));
	const token = accessToken;

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: "application/json",
		},
	};

	const logout = async (e) => {
		e.preventDefault();
		const response = await axios.post(`${url}user/logout`, config);

		localStorage.removeItem("accessToken");
		setAccessToken("");
		navigate("/login");
	};

	const handleSearch = (e) => {
		e.preventDefault();
		axios.get(`${url}employee/search/${search}`, config)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => alert(err));
	};

	return (
		<div>
			<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
				{/* <!-- Sidebar Toggle (Topbar) --> */}
				<button
					id="sidebarToggleTop"
					className="btn btn-link d-md-none rounded-circle mr-3"
				>
					<i className="fa fa-bars"></i>
				</button>

				{/* <!-- Topbar Search --> */}
				<form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
					<div className="input-group">
						<input
							type="text"
							className="form-control bg-light border-0 small"
							placeholder="Search for..."
							aria-label="Search"
							aria-describedby="basic-addon2"
							onChange={(e) => setSearch(e.target.value)}
						/>
						<div className="input-group-append">
							<button
								className="btn btn-primary"
								type="button"
								onClick={handleSearch}
							>
								<i className="fas fa-search fa-sm"></i>
							</button>
						</div>
					</div>
				</form>

				{/* <!-- Topbar Navbar --> */}
				<ul className="navbar-nav ml-auto">
					{/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
					<li className="nav-item dropdown no-arrow d-sm-none">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="searchDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							<i className="fas fa-search fa-fw"></i>
						</a>
						{/* <!-- Dropdown - Messages --> */}
						<div
							className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
							aria-labelledby="searchDropdown"
						>
							<form className="form-inline mr-auto w-100 navbar-search">
								<div className="input-group">
									<input
										type="text"
										className="form-control bg-light border-0 small"
										placeholder="Search for..."
										aria-label="Search"
										aria-describedby="basic-addon2"
									/>
									<div className="input-group-append">
										<button
											className="btn btn-primary"
											type="button"
										>
											<i className="fas fa-search fa-sm"></i>
										</button>
									</div>
								</div>
							</form>
						</div>
					</li>

					{/* <!-- Nav Item - Alerts --> */}
					<li className="nav-item dropdown no-arrow mx-1">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="alertsDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							<i className="fas fa-bell fa-fw"></i>
							{/* <!-- Counter - Alerts --> */}
							<span className="badge badge-danger badge-counter">
								3+
							</span>
						</a>
						{/* <!-- Dropdown - Alerts --> */}
						<div
							className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
							aria-labelledby="alertsDropdown"
						>
							<h6 className="dropdown-header">
								Alerts Center
							</h6>
							<a
								className="dropdown-item d-flex align-items-center"
								href="#"
							>
								<div className="mr-3">
									<div className="icon-circle bg-primary">
										<i className="fas fa-file-alt text-white"></i>
									</div>
								</div>
								<div>
									<div className="small text-gray-500">
										December 12, 2019
									</div>
									<span className="font-weight-bold">
										A new monthly report is ready
										to download!
									</span>
								</div>
							</a>
							<a
								className="dropdown-item d-flex align-items-center"
								href="#"
							>
								<div className="mr-3">
									<div className="icon-circle bg-success">
										<i className="fas fa-donate text-white"></i>
									</div>
								</div>
								<div>
									<div className="small text-gray-500">
										December 7, 2019
									</div>
									$290.29 has been deposited into
									your account!
								</div>
							</a>
							<a
								className="dropdown-item d-flex align-items-center"
								href="#"
							>
								<div className="mr-3">
									<div className="icon-circle bg-warning">
										<i className="fas fa-exclamation-triangle text-white"></i>
									</div>
								</div>
								<div>
									<div className="small text-gray-500">
										December 2, 2019
									</div>
									Spending Alert: We've noticed
									unusually high spending for your
									account.
								</div>
							</a>
							<a
								className="dropdown-item text-center small text-gray-500"
								href="#"
							>
								Show All Alerts
							</a>
						</div>
					</li>

					{/* <!-- Nav Item - Messages --> */}
					<li className="nav-item dropdown no-arrow mx-1">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="messagesDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							<i className="fas fa-envelope fa-fw"></i>
							{/* <!-- Counter - Messages --> */}
							<span className="badge badge-danger badge-counter">
								7
							</span>
						</a>
						{/* <!-- Dropdown - Messages --> */}
						<div
							className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
							aria-labelledby="messagesDropdown"
						>
							<h6 className="dropdown-header">
								Message Center
							</h6>
							<a
								className="dropdown-item d-flex align-items-center"
								href="#"
							>
								<div className="dropdown-list-image mr-3">
									<img
										className="rounded-circle"
										src="img/undraw_profile_1.svg"
										alt="..."
									/>
									<div className="status-indicator bg-success"></div>
								</div>
								<div className="font-weight-bold">
									<div className="text-truncate">
										Hi there! I am wondering if
										you can help me with a problem
										I've been having.
									</div>
									<div className="small text-gray-500">
										Emily Fowler · 58m
									</div>
								</div>
							</a>
							<a
								className="dropdown-item d-flex align-items-center"
								href="#"
							>
								<div className="dropdown-list-image mr-3">
									<img
										className="rounded-circle"
										src="img/undraw_profile_2.svg"
										alt="..."
									/>
									<div className="status-indicator"></div>
								</div>
								<div>
									<div className="text-truncate">
										I have the photos that you
										ordered last month, how would
										you like them sent to you?
									</div>
									<div className="small text-gray-500">
										Jae Chun · 1d
									</div>
								</div>
							</a>
							<a
								className="dropdown-item d-flex align-items-center"
								href="#"
							>
								<div className="dropdown-list-image mr-3">
									<img
										className="rounded-circle"
										src="img/undraw_profile_3.svg"
										alt="..."
									/>
									<div className="status-indicator bg-warning"></div>
								</div>
								<div>
									<div className="text-truncate">
										Last month's report looks
										great, I am very happy with
										the progress so far, keep up
										the good work!
									</div>
									<div className="small text-gray-500">
										Morgan Alvarez · 2d
									</div>
								</div>
							</a>
							<a
								className="dropdown-item d-flex align-items-center"
								href="#"
							>
								<div className="dropdown-list-image mr-3">
									<img
										className="rounded-circle"
										src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
										alt="..."
									/>
									<div className="status-indicator bg-success"></div>
								</div>
								<div>
									<div className="text-truncate">
										Am I a good boy? The reason I
										ask is because someone told me
										that people say this to all
										dogs, even if they aren't
										good...
									</div>
									<div className="small text-gray-500">
										Chicken the Dog · 2w
									</div>
								</div>
							</a>
							<a
								className="dropdown-item text-center small text-gray-500"
								href="#"
							>
								Read More Messages
							</a>
						</div>
					</li>

					<div className="topbar-divider d-none d-sm-block"></div>

					{/* <!-- Nav Item - User Information --> */}
					<li className={`nav-item dropdown no-arrow ${show}`}>
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="userDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded={expanded}
							onClick={dropdown}
						>
							<span className="mr-2 d-none d-lg-inline text-gray-600 small">
								Douglas McGee
							</span>
							<img
								className="img-profile rounded-circle"
								src="https://scontent.fdac27-1.fna.fbcdn.net/v/t1.6435-9/129899228_1802448853238872_2682304499597119576_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEfpZfnMLFPcA2qA8MwfqTX1pK4YhDA2PDWkrhiEMDY8FhvB60EUYCJJxIhCWxuncH3Pfh_sHigbIPU8ijTSRhY&_nc_ohc=-SMq3AjbiHkAX_DS6G-&tn=jEknRg6o8BfqTdYt&_nc_ht=scontent.fdac27-1.fna&oh=00_AT8UKLVBPh7xHq-Wdd5SXTfL3brgVKOmlq33u0f1jIj3tQ&oe=6234984F"
							/>
						</a>
						{/* <!-- Dropdown - User Information --> */}
						<div
							className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${show}`}
							aria-labelledby="userDropdown"
						>
							<a className="dropdown-item" href="#">
								<i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
								Profile
							</a>
							<a className="dropdown-item" href="#">
								<i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
								Settings
							</a>
							<a className="dropdown-item" href="#">
								<i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
								Activity Log
							</a>
							<div className="dropdown-divider"></div>
							<a
								className="dropdown-item"
								href="#"
								data-toggle="modal"
								data-target="#logoutModal"
								onClick={logout}
							>
								<i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
								Logout
							</a>
						</div>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Topbar;
