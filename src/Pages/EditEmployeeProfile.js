import React, { useState, useEffect, useContext } from "react";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import { useParams } from "react-router-dom";
import { AuthContext } from "./../Components/Contexts/AuthContext";

function EditEmployeeProfile() {
	const { id } = useParams();
	const { accessToken } = useContext(AuthContext);

	const url = "http://localhost:8000/api/";

	const token = accessToken;

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: "application/json",
		},
	};

	return (
		<>
			<div id="wrapper">
				<Sidebar />
				<div id="content-wrapper" className="d-flex flex-column">
					<div id="content">
						<Topbar />

						{/* Begin Page Content */}
						<div className="container-fluid">
							{/* Account Info Card begin */}
							<div className="row mb-5">
								<div className="col-lg-12">
									<div className="card ">
										<div className="card-header ">
											<div className="card-title text-center font-weight-bold text-uppercase text-muted align-middle">
												Account Info
											</div>
										</div>

										{/* Account Info Card Body Begin */}
										<div className="card-body shadow shadow">
											<div className="row">
												<div className="col-lg-4">
													<div class="form-group">
														<label for="firstName">
															First
															Name
														</label>
														<input
															type="text"
															class="form-control"
															id="firstName"
															aria-describedby="nameHelp"
															placeholder=" First Name"
														/>
													</div>
												</div>
												<div className="col-lg-4">
													<div class="form-group">
														<label for="lastname">
															Last
															Name
														</label>
														<input
															type="text"
															class="form-control"
															id="lastName"
															aria-describedby="nameHelp"
															placeholder=" Last Name"
														/>
													</div>
												</div>
												<div className="col-lg-4">
													<div class="form-group">
														<label for="email">
															Email
														</label>
														<input
															type="email"
															class="form-control"
															id="email"
															aria-describedby="nameHelp"
															placeholder=" Email"
														/>
													</div>
												</div>
												<div className="col-lg-4">
													<div class="form-group">
														<label for="email">
															Email
														</label>
														<input
															type="email"
															class="form-control"
															id="email"
															aria-describedby="nameHelp"
															placeholder=" Email"
														/>
													</div>
												</div>
												<div className="col-lg-4">
													<div class="form-group">
														<label for="email">
															Email
														</label>
														<input
															type="email"
															class="form-control"
															id="email"
															aria-describedby="nameHelp"
															placeholder=" Email"
														/>
													</div>
												</div>
												<div className="col-lg-4">
													<div class="form-group">
														<label for="email">
															Email
														</label>
														<input
															type="email"
															class="form-control"
															id="email"
															aria-describedby="nameHelp"
															placeholder=" Email"
														/>
													</div>
												</div>
											</div>
										</div>
										{/* Account Info Card Body End */}
									</div>
								</div>
							</div>

							{/* Account Info Card End */}

							{/* Personal Info Card begin */}
							<div className="row mb-5">
								<div className="col-lg-12">
									<div className="card ">
										<div className="card-header">
											<div className="card-title text-center font-weight-bold text-uppercase text-muted">
												Personal Info
											</div>
										</div>

										{/* Personal Info Card Body Begin */}
										<div className="card-body shadow">
											<div className="row">
												<div className="col-lg-4">
													<div class="form-group">
														<label for="firstName">
															First
															Name
														</label>
														<input
															type="text"
															class="form-control"
															id="firstName"
															aria-describedby="nameHelp"
															placeholder=" First Name"
														/>
													</div>
												</div>
												<div className="col-lg-4">
													<div class="form-group">
														<label for="lastname">
															Last
															Name
														</label>
														<input
															type="text"
															class="form-control"
															id="lastName"
															aria-describedby="nameHelp"
															placeholder=" Last Name"
														/>
													</div>
												</div>
												<div className="col-lg-4">
													<div class="form-group">
														<label for="email">
															Email
														</label>
														<input
															type="email"
															class="form-control"
															id="email"
															aria-describedby="nameHelp"
															placeholder=" Email"
														/>
													</div>
												</div>
												<div className="col-lg-4">
													<div class="form-group">
														<label for="email">
															Email
														</label>
														<input
															type="email"
															class="form-control"
															id="email"
															aria-describedby="nameHelp"
															placeholder=" Email"
														/>
													</div>
												</div>
												<div className="col-lg-4">
													<div class="form-group">
														<label for="email">
															Email
														</label>
														<input
															type="email"
															class="form-control"
															id="email"
															aria-describedby="nameHelp"
															placeholder=" Email"
														/>
													</div>
												</div>
												<div className="col-lg-4">
													<div class="form-group">
														<label for="email">
															Email
														</label>
														<input
															type="email"
															class="form-control"
															id="email"
															aria-describedby="nameHelp"
															placeholder=" Email"
														/>
													</div>
												</div>
											</div>
										</div>
										{/* Personal Info Card Body End */}
									</div>
								</div>
							</div>
							{/* Personal Info Card End */}

							{/* Employee Info Card begin */}
							<div className="row mb-5">
								<div className="col-lg-12">
									<div className="card ">
										<div className="card-header">
											<div className="card-title text-center font-weight-bold text-uppercase text-muted">
												Employee Info
											</div>
										</div>

										{/* Employee Info Card Body Begin */}
										<div className="card-body shadow">
											<div className="row">
												<div className="col-lg-4">
													<div class="form-group">
														<label for="firstName">
															First
															Name
														</label>
														<input
															type="text"
															class="form-control"
															id="firstName"
															aria-describedby="nameHelp"
															placeholder=" First Name"
														/>
													</div>
												</div>
												<div className="col-lg-4">
													<div class="form-group">
														<label for="lastname">
															Last
															Name
														</label>
														<input
															type="text"
															class="form-control"
															id="lastName"
															aria-describedby="nameHelp"
															placeholder=" Last Name"
														/>
													</div>
												</div>
												<div className="col-lg-4">
													<div class="form-group">
														<label for="email">
															Email
														</label>
														<input
															type="email"
															class="form-control"
															id="email"
															aria-describedby="nameHelp"
															placeholder=" Email"
														/>
													</div>
												</div>
												<div className="col-lg-4">
													<div class="form-group">
														<label for="email">
															Email
														</label>
														<input
															type="email"
															class="form-control"
															id="email"
															aria-describedby="nameHelp"
															placeholder=" Email"
														/>
													</div>
												</div>
												<div className="col-lg-4">
													<div class="form-group">
														<label for="email">
															Email
														</label>
														<input
															type="email"
															class="form-control"
															id="email"
															aria-describedby="nameHelp"
															placeholder=" Email"
														/>
													</div>
												</div>
												<div className="col-lg-4">
													<div class="form-group">
														<label for="email">
															Email
														</label>
														<input
															type="email"
															class="form-control"
															id="email"
															aria-describedby="nameHelp"
															placeholder=" Email"
														/>
													</div>
												</div>
											</div>
										</div>
										{/* Employee Info Card Body End */}
									</div>
								</div>
							</div>
							{/* Employee Info Card End */}
						</div>
					</div>

					{/* End Page Content */}
					<Footer />
				</div>
			</div>
		</>
	);
}

export default EditEmployeeProfile;
