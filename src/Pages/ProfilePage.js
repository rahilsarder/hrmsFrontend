import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProfilePage() {
	const { id } = useParams();

	const [employeeData, setEmployeeData] = useState([]);

	const url = "http://localhost:8000/api/";

	const token = "16|xgPccKvPk4pvAvJ0KrIcnP7y5noENjEldTVf6qyl";

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

	return (
		<div>
			<h1>profile!!!</h1>
			{/* <h2>{console.log(employeeData)}</h2> */}
			<ul>
				{employeeData.map((emp) => {
					return (
						<>
							<li>Name: <b>{emp.user.name}</b></li>
							<li>Department: <b>{emp.department.name}</b></li>
							<li>Shift: <b>{emp.duty_time.name}</b></li>
						</>
					);
				})}
			</ul>
		</div>
	);
}

export default ProfilePage;
