import React from 'react'
import { Row, Button, Col, Input, Space, Badge } from 'antd'
import {
	SearchOutlined,
	ShoppingOutlined,
	UserOutlined,
} from '@ant-design/icons'

function NavBar() {
	return (
		<Row
			style={{
				backgroundColor: '#e19563',
				color: 'white',
				height: '50px',
				alignItems: 'center',
				justifyContent: 'space-around',
				fontFamily: 'Cinzel',
			}}
		>
			<h3 className="logo">Da MARGI</h3>
			{/* <Input
				placeholder="Search"
				style={{ width: 200 }}
				prefix={<SearchOutlined />}
			/> */}
			<Col>
				<Space>
					<UserOutlined style={{ fontSize: '22px' }} />
					<Badge count={5} size={'small'}>
						<ShoppingOutlined style={{ fontSize: '22px', color: 'white' }} />
					</Badge>
				</Space>
			</Col>
		</Row>
	)
}

export default NavBar
