import React, { Components } from "react";
import { Button, InputNumber, Space } from 'antd';

export default function InputDispose() {
	return (
		<Space.Compact size="large" style={{ width: '100%', marginLeft: "300px", paddingRight: "600px"}}>
			<InputNumber prefix="BNB" size = "20px" style={{width: "100%"}} />
			<Button type="primary"style={{}}>Deposit</Button>
		</Space.Compact>
	)
}