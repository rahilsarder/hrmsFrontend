import React, { useState, useContext } from "react";
import axios from "axios";
import "../Styles/login.css";
import { useNavigate, Route } from "react-router-dom";
import logo from "./Assets/imgs/ILogo.png";
import Dashboard from "../Pages/Dashboard";
import Employees from "./../Pages/Employees";
import EditEmployeeProfile from "./../Pages/EditEmployeeProfile";
import UsersList from "./../Pages/UsersList";
import EmployeeDashboard from "./../Pages/EmployeeDashboard";
import EmployeeProfilePage from "../Pages/EmployeeProfilePage";
import { AuthContext } from "./Contexts/AuthContext";

function Login() {
	const { setisLoggedIn, setIsAdmin, setAccessToken } =
		useContext(AuthContext);
	const navigate = useNavigate();
	const [auth, setAuth] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [api, setApi] = useState([]);
	// const [isLoggedIn, setIsLoggedIn] = useState(false);

	const url = "http://localhost:8000/api/";
	const login = async (e) => {
		e.preventDefault();
		const response = await axios.post(`${url}user/login`, {
			email: email,
			password: password,
		});

		localStorage.setItem("accessToken", response.data.accessToken);
		localStorage.setItem("role", response.data.user.isAdmin);
		setAccessToken(response.data.accessToken);
		setisLoggedIn(true);

		if (response.data.user.isAdmin == 0) {
			setIsAdmin(false);

			navigate("/employee/dashboard");
		} else {
			setIsAdmin(true);
			navigate("/dashboard");
		}
	};

	return (
		<div>
			{/* {console.log(api.data.user.isAdmin)}
			{console.log(api.data.accessToken)} */}
			<div className="container">
				{/* <!-- Outer Row --> */}
				<div className="row justify-content-center">
					<div className="col-xl-10 col-lg-12 col-md-9">
						<div className="card o-hidden border-0 shadow-lg my-5 p-1">
							<div className="card-body p-0">
								{/* <!-- Nested Row within Card Body --> */}
								<div className="row py-1">
									<div
										className="col-lg-6 bg-image"
										style={{
											backgroundImage:
												"url(" + logo + ")",

											backgroundPosition:
												"center",
											backgroundSize: "cover",
											backgroundRepeat:
												"no-repeat",
										}}
									></div>
									<div className="col-lg-6">
										<div className="p-5">
											<div className="text-center">
												<h1 className="h4 text-gray-900 mb-4">
													Welcome Back!
												</h1>
											</div>
											<form className="user">
												<div className="form-group">
													<input
														type="email"
														className="form-control form-control-user"
														id="exampleInputEmail"
														aria-describedby="emailHelp"
														placeholder="Enter Email Address..."
														onChange={(
															e
														) =>
															setEmail(
																e
																	.target
																	.value
															)
														}
													/>
												</div>
												<div className="form-group">
													<input
														type="password"
														className="form-control form-control-user"
														id="exampleInputPassword"
														placeholder="Password"
														onChange={(
															e
														) =>
															setPassword(
																e
																	.target
																	.value
															)
														}
													/>
												</div>
												<div className="form-group">
													<div className="custom-control custom-checkbox small">
														<input
															type="checkbox"
															className="custom-control-input"
															id="customCheck"
														/>
														<label
															className="custom-control-label"
															for="customCheck"
														>
															Remember
															Me
														</label>
													</div>
												</div>
												<a
													href="index.html"
													className="btn btn-primary btn-user btn-block"
													onClick={login}
												>
													Login
												</a>
											</form>
											<hr />
											<div className="text-center">
												<a
													className="small"
													href="forgot-password.html"
												>
													Forgot
													Password?
												</a>
											</div>
											<div className="text-center">
												<a
													className="small"
													href="register.html"
												>
													Create an
													Account!
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
