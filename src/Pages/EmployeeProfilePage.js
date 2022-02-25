import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import Footer from "../Components/Footer";
import avatar from "../Components/Assets/imgs/avatar.png";
import AttendanceTable from "../Components/AttendanceTable";
import moment from "moment";
import { AuthContext } from "./../Components/Contexts/AuthContext";
function ProfilePage() {
	const { id } = useParams();
	const { accessToken } = useContext(AuthContext);
	const navigate = useNavigate();
	const [employeeData, setEmployeeData] = useState([]);

	const url = "http://localhost:8000/api/";

	const token = accessToken;

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: "application/json",
		},
	};

	const fetchProfile = () => {
		axios.get(`${url}employees/${id}`, config).then((res) =>
			setEmployeeData(res.data.employee)
		);
	};

	useEffect(() => {
		fetchProfile();
	}, []);

	const EditProfilePage = (e) => {
		<Link to={`/dashboard/employees/${e}/edit`} />;

		navigate(`/dashboard/employees/${e}/edit`);
	};

	const convertToTime = (dbDate) => {
		let time = new Date(Date.parse(dbDate)).toString();
		time = time.split(" ").slice(4, 5).join(" ");
		return time;
	};

	return (
		<div id="wrapper">
			<Sidebar />
			{/* <!-- Content Wrapper --> */}
			<div id="content-wrapper" className="d-flex flex-column">
				{/* <!-- Main Content --> */}
				<div id="content">
					<Topbar />

					{/* <!-- Begin Page Content --> */}
					<div className="container-fluid mt-5">
						{/* <!-- Page Heading --> */}

						<div class="row">
							<div class="col-md-12">
								<div class="container-fluid">
									{employeeData.map((emp) => {
										return (
											<>
												<div class="row">
													<div class="col-md-1"></div>
													<div class="col-md-1">
														<img
															class="rounded-circle"
															height="150px"
															src={
																avatar
															}
															onError={
																avatar
															}
														/>
													</div>
													<div class="col-md-1"></div>
													<div className="col-md-7">
														<div class="card shadow mb-4">
															<div
																class="card-body border-bottom-info "
																id="card"
															>
																<div className="row align-items-center justify-content-center">
																	<div class="card border-left-primary shadow h-100 py-2 mr-3">
																		<div class="card-body">
																			<div class="row no-gutters align-items-center">
																				<div class="col mr-2">
																					<div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
																						Earnings
																						(Monthly)
																					</div>
																					<div class="h5 mb-0 font-weight-bold text-gray-800">
																						{
																							emp
																								.department
																								.salary
																						}{" "}
																						Tk.
																					</div>
																				</div>
																				<div class="col-auto">
																					<i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div class="card border-left-primary shadow h-100 py-2 mr-3">
																		<div class="card-body">
																			<div class="row no-gutters align-items-center">
																				<div class="col mr-2">
																					<div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
																						Earnings
																						(Yearly)
																					</div>
																					<div class="h5 mb-0 font-weight-bold text-gray-800">
																						{emp
																							.department
																							.salary *
																							12}{" "}
																						Tk.
																					</div>
																				</div>
																				<div class="col-auto">
																					<i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div class="card border-left-primary shadow h-100 py-2 mr-3">
																		<div class="card-body">
																			<div class="row no-gutters align-items-center">
																				<div class="col mr-2">
																					<div class="text-xs font-weight-bold text-info text-uppercase mb-1">
																						Attendance
																					</div>
																					<div class="row no-gutters align-items-center">
																						<div class="col-auto">
																							<div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
																								50%
																							</div>
																						</div>
																						<div class="col">
																							<div class="progress progress-sm mr-2">
																								<div
																									class="progress-bar bg-info"
																									role="progressbar"
																									style={{
																										width: "4rem",
																									}}
																									aria-valuenow="50"
																									aria-valuemin="0"
																									aria-valuemax="100"
																								></div>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div class="col-auto">
																					<i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div class="card border-left-primary shadow h-100 py-2 pr-2">
																		<div class="card-body">
																			<div class="row no-gutters align-items-center">
																				<div className="row no-gutters">
																					<div class="col mr-2">
																						<div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
																							<button
																								className="btn btn-info"
																								onClick={() =>
																									EditProfilePage(
																										emp.id
																									)
																								}
																							>
																								EDIT
																							</button>
																						</div>
																					</div>
																				</div>
																				<div className="row no-gutters">
																					<div class="col">
																						<div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
																							<button className="btn btn-danger">
																								Suspend
																							</button>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div class="col-md-2"></div>
													</div>
												</div>

												<div class="row my-5">
													<div class="col-md-1"></div>

													<div className="col-md-3">
														<div class="card shadow mb-4">
															<div class="card-header py-3">
																<h6 class="m-0 font-weight-bold text-primary">
																	Employee
																	Information
																</h6>
															</div>
															<div class="card-body">
																<strong>
																	Name:{" "}
																</strong>{" "}
																{
																	emp.first_name
																}{" "}
																{
																	emp.last_name
																}
																<br />
																<strong>
																	Email:{" "}
																</strong>{" "}
																{
																	emp
																		.user
																		.email
																}
																<br />
																<strong>
																	Department:{" "}
																</strong>
																{
																	emp
																		.department
																		.name
																}
																<br />
																<strong>
																	Shift:{" "}
																</strong>
																{
																	emp
																		.duty_time
																		.name
																}
																<br />
																<strong>
																	Timing:{" "}
																</strong>
																{moment(
																	emp
																		.duty_time
																		.start_time
																).format(
																	"h:mm a"
																)}
																{
																	" - "
																}{" "}
																{moment(
																	emp
																		.duty_time
																		.end_time
																).format(
																	"h:mm a"
																)}
															</div>
														</div>
													</div>
													<div className="col-md-6">
														<div class="card shadow mb-4 align-items-center">
															<div class="card-header py-3">
																<h6 class="m-0 font-weight-bold text-primary">
																	Attendance
																</h6>
															</div>
															<div class="card-body ">
																{emp.attendance.map(
																	(
																		att
																	) => {
																		return (
																			<>
																				<AttendanceTable
																					att={
																						att
																					}
																					emp={
																						emp
																					}
																				/>
																			</>
																		);
																	}
																)}
															</div>
														</div>
													</div>

													<div class="col-md-1"></div>
												</div>
											</>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /.container-fluid --> */}
				<Footer />

				{/* <!-- End of Main Content --> */}
			</div>
		</div>
	);
}

export default ProfilePage;
