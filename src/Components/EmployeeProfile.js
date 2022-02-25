import React from "react";
import avatar from "../Components/Assets/imgs/avatar.png";

function EmployeeProfile() {
	const handleAttendance = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<div class="row">
				<div class="col-md-12">
					<div class="container-fluid">
						<>
							<div class="row">
								<div class="col-md-1"></div>
								<div class="col-md-1">
									<img
										class="rounded-circle"
										height="150px"
										src={avatar}
										onError={avatar}
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
																	10000
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
																	120000
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
																			<button
																				className="btn btn-danger"
																				onClick={
																					handleAttendance
																				}
																			>
																				Attend
																			</button>
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
																			// onClick={() =>
																			// 	EditProfilePage(
																			// 		emp.id
																			// 	)
																			// }
																		>
																			Leave
																		</button>
																	</div>
																</div>
															</div>
															<div className="row no-gutters">
																<div class="col">
																	<div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
																		<button
																			className="btn btn-danger"
																			onClick={
																				handleAttendance
																			}
																		>
																			Attend
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
												Employee Information
											</h6>
										</div>
										<div class="card-body">
											<strong>Name: </strong>{" "}
											{/* {
																	emp.first_name
																}{" "}
																{
																	emp.last_name
																} */}
											Sarder Monowarul Amin
											<br />
											<strong>
												Email:{" "}
											</strong>{" "}
											{/* {
																	emp
																		.user
																		.email
																} */}
											sarder.amin.rahi@gmail.com
											<br />
											<strong>
												Department:{" "}
											</strong>
											{/* {
																	emp
																		.department
																		.name
																} */}
											NOC
											<br />
											<strong>Shift: </strong>
											{/* {
																	emp
																		.duty_time
																		.name
																} */}
											12-12
											<br />
											<strong>Timing: </strong>
											{/* {moment(
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
																)} */}
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
											{/* {emp.attendance.map(
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
																)} */}
										</div>
									</div>
								</div>

								<div class="col-md-1"></div>
							</div>
						</>
					</div>
				</div>
			</div>
		</>
	);
}

export default EmployeeProfile;
