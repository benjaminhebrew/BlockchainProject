import React, { Components } from "react";
import { Progress, Tooltip, Space } from 'antd';

function currentPro(){
	return 5;
}

function minimumPro(){
	return 10;
}

function showTitle(){
	var t = "current / 0.1 BNB softCap / 1 BNB hardCap"
	return t;
}

function Cap() {
	return (
		<Tooltip title={showTitle()}>
			<Progress percent={minimumPro()} success={{ percent: currentPro() }} style={{color: "white", paddingLeft: "35px"}}/>
		</Tooltip>
	)
}

export default Cap;