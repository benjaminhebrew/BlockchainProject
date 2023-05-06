import React, { Components } from "react";
import { Progress, Tooltip, Space } from 'antd';

function currentPro(){
	return 30;
}

function minimumPro(){
	return 60;
}

function showTitle(){
	var t = "current / 0.1 minimum / 2 successful"
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