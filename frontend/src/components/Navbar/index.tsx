import React from 'react'
import { Row, Button, Col, Input, Space } from 'antd'
import {
	SearchOutlined,
	ShoppingOutlined,
	UserOutlined,
} from '@ant-design/icons'

function NavBar() {
	return (
		<Row
			style={{
				backgroundColor: 'grey',
				height: '50px',
				alignItems: 'center',
				justifyContent: 'space-around',
				fontFamily: 'Cinzel',
			}}
		>
			<h3 className="logo">Da MARGI</h3>
			<Input
				placeholder="Search"
				style={{ width: 200 }}
				prefix={<SearchOutlined />}
			/>
			<Col>
				<Space>
					<Button shape="circle" icon={<UserOutlined />} />
					<Button shape="circle" icon={<ShoppingOutlined />} />
				</Space>
			</Col>
		</Row>
	)
}

export default NavBar
