import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function UsersTable() {
	const [users, setUsers] = useState([]);
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
		axios.get(`${url}user/list`, config)
			.then((res) => setUsers(res.data.Users))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getData();
	}, []);
	return (
		<>
			<div className="container-fluid">
				{/* <!-- Page Heading --> */}
				{console.log(users)}

				{/* <!-- DataTales Example --> */}
				<div className="card shadow mb-4">
					<div className="card-header py-3">
						<h6 className="m-0 font-weight-bold text-primary">
							Users List
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
                                    {users.map((usr)=>{
                                        return(
                                            <>
                                            <tr key={usr.id}>
                                                <td>
                                                    {usr.name}
                                                </td>
                                                <td>
                                                    {usr.name}
                                                </td>
                                                <td>
                                                    {usr.name}
                                                </td>
                                                <td>
                                                    {usr.name}
                                                </td>
                                                <td>
                                                    {usr.name}
                                                </td>
                                                <td>
                                                    {usr.name}
                                                </td>
                                                <td>
                                                    {usr.name}
                                                </td>
                                                <td>
                                                    {usr.name}
                                                </td>
                                            </tr>
                                            </>
                                        )
                                    })}
                                </tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default UsersTable;
