import React, { Components } from "react";
import {
	StyledCTime,
} from "./styles/TimeDisplay.styled.js";
import {
	FieldTimeOutlined
} from '@ant-design/icons'
import { Space, Typography } from 'antd';

const { Title } = Typography;

function getCTime() {
	const today = new Date();
	var d = today.getDay();
	var mon = today.getMonth() + 1;
	var y = today.getFullYear();
	let h = today.getHours();
	let m = today.getMinutes();
	let s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('current_time') != null ? document.getElementById('current_time').innerHTML = d + "/" + mon + "/" + y + " " + h + ":" + m + ":" + s : m = 0;
	setTimeout(getCTime, 1000);
}

function checkTime(i) {
	if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
	return i;
}

export function CTime() {
	getCTime();

	return (
		<StyledCTime>
			<FieldTimeOutlined style={{ float: "left", fontSize: "17px", padding: "5px" }} />
			<Title id="current_time" level={4} style={{ color: "white", fontFamily: "'Montserrat', sans-serif", width: "250px" }}>
				
			</Title>
		</StyledCTime>
	)
}

export function STime() {
	getCTime();

	return (
		<StyledCTime>
			<FieldTimeOutlined style={{ float: "left", fontSize: "17px", padding: "5px" }} />
			<Title id="start_time" level={4} style={{ color: "white", fontFamily: "'Montserrat', sans-serif", width: "260px" }}>
				10/5/2023 00/00/00
			</Title>
		</StyledCTime>
	)
}

export function ETime() {
	getCTime();

	return (
		<StyledCTime style={{ float: "right"}}>
			<FieldTimeOutlined style={{ float: "left", fontSize: "17px", padding: "5px" }} />
			<Title id="end_time" level={4} style={{ color: "white", fontFamily: "'Montserrat', sans-serif", width: "260px" }}>
				11/5/2023 00/00/00
			</Title>
		</StyledCTime>
	)
}