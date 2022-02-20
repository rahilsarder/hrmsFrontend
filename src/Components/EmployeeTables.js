import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function EmployeeTables() {
	const [employee, setEmployee] = useState([]);
	const [loading, setLoading] = useState();
	const navigate = useNavigate();

	const url = "http://localhost:8000/api/";

	const token = "16|xgPccKvPk4pvAvJ0KrIcnP7y5noENjEldTVf6qyl";

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: "application/json",
		},
	};

	const getData = () => {
		axios.get(`${url}employees`, config)
			.then((res) => setEmployee(res.data.employees))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getData();
	}, []);

	const profile = (e) => {
		// e.preventDefault();
		console.log(e);
		<Link to={`/dashboard/employees/${e.id}`} />;
		// axios.get(`${url}employees/${e}`, config);
		navigate(`/dashboard/employees/${e}`);
	};

	return (
		<div className="container-fluid">
			{/* <!-- Page Heading --> */}
			<h1 className="h3 mb-2 text-gray-800">Tables</h1>
			<p className="mb-4">
				DataTables is a third party plugin that is used to generate
				the demo table below. For more information about DataTables,
				please visit the{" "}
				<a target="_blank" href="https://datatables.net">
					official DataTables documentation
				</a>
				.
			</p>

			{/* <!-- DataTales Example --> */}
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h6 className="m-0 font-weight-bold text-primary">
						DataTables Example
					</h6>
				</div>
				<div className="card-body">
					<div className="table-responsive">
						<table
							className="table table-bordered"
							id="dataTable"
							width="100%"
							cellSpacing="0"
						>
							<thead>
								<tr>
									<th>Profile</th>
									<th>Name</th>
									<th>Department</th>
									<th>Duty Time</th>
									<th>Email</th>
									<th>Shift Start Time</th>
									<th>Shift End Time</th>
									<th>Salary</th>
								</tr>
							</thead>
							<tbody>
								{employee.map((emp) => {
									return (
										<tr key={emp.id}>
											{/* <a
												href=""
												className="btn btn-primary"
												role="button"
											> */}
											<td>
												<button
													className="btn btn-primary"
													onClick={()=>
														profile(emp.id)
													}
												>
													Profile
												</button>
											</td>
											{/* </a> */}

											<td>{emp.user.name}</td>

											<td>
												{
													emp.department
														.name
												}
											</td>
											<td>
												{emp.duty_time.name}
											</td>
											<td>{emp.user.email}</td>
											<td>
												{
													emp.duty_time
														.start_time
												}
											</td>
											<td>
												{
													emp.duty_time
														.end_time
												}
											</td>
											<td>
												{
													emp.department
														.salary
												}
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EmployeeTables;
