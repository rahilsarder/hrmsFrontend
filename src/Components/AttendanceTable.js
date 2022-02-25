import React, { useState, useEffect } from "react";
import moment from "moment";

function AttendanceTable(props) {
	const [green, setGreen] = useState(false);
	const att = props.att;
	const emp = props.emp;
	const convertToDate = (dbDate) => {
		let date = new Date(Date.parse(dbDate)).toString();
		date = date.split(" ").slice(0, 4).join(" ");

		return date;
	};
	const convertToTime = (dbDate) => {
		let time = new Date(Date.parse(dbDate)).toString();
		time = time.split(" ").slice(4, 5).join(" ");
		return time;
	};

	useEffect(() => {
		convertToTime(emp.duty_time.start_time) + "00:15:00" <=
		convertToTime(att.in_time)
			? setGreen(true)
			: setGreen(false);
	}, []);

	////Stack Overflow Time Comparison where there is no date mentioned ////

	const isTimeBetween = function (startTime, endTime, serverTime) {
		let start = moment(startTime, "H:mm").add(15, "m");
		let end = moment(endTime, "H:mm");
		let server = moment(serverTime, "H:mm");
		if (end < start) {
			return (
				(server >= start &&
					server <= moment("23:59:59", "h:mm:ss")) ||
				(server >= moment("0:00:00", "h:mm:ss") && server < end)
			);
		}
		return server >= start && server < end;
	};

	let startTime = moment(emp.duty_time.start_time).format("h:mm");

	let inTime = moment(att.in_time).format("h:mm ");

	var today = new Date();
	var time = today.getHours() + ":" + today.getMinutes();

	return (
		<div>
			<li
				className={`list-group-item list-group-item-${
					isTimeBetween(startTime, inTime, time)
						? "success"
						: "danger"
				}`}
				key={att.id}
			>
				{convertToDate(emp.duty_time.start_time)}
				{"   :  "}
				{moment(att.in_time).format("h:mm a")}
				{" - "}
				{moment(att.out_time).format("h:mm a")}
			</li>
		</div>
	);
}

export default AttendanceTable;
