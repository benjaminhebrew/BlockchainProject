import React, { Components } from "react";
import { Button, InputNumber, Space } from 'antd';

export default function InputDispose() {
	return (
		<Space.Compact size="large" style={{ width: '100%', marginLeft: "30px", paddingRight: "40px"}}>
			<InputNumber prefix="$" size = "20px" style={{width: "100%"}} />
			<Button type="primary"style={{}}>Submit</Button>
		</Space.Compact>
	)
}