import React from 'react'
import { Row, Col, Input, Space, Badge } from 'antd'
import { ShoppingOutlined, UserOutlined } from '@ant-design/icons'
import './style.css'

const { Search } = Input

function NavBar() {
	return (
		<div className="main-navbar">
			<Row
				style={{
					backgroundColor: 'white',
					borderBottom: '1px solid #e19563',
					color: 'black',
					height: '60px',
					alignItems: 'center',
					justifyContent: 'space-around',
					fontFamily: 'Cinzel',
				}}
			>
				<h2 className="logo">Da Margi</h2>
				<Search
					placeholder="Pesquisar produto"
					allowClear
					style={{ width: 200 }}
				/>
				<Col>
					<Space>
						<UserOutlined className="icon" style={{ fontSize: '22px' }} />
						<Badge count={5} size={'small'}>
							<ShoppingOutlined className="icon" style={{ fontSize: '22px' }} />
						</Badge>
					</Space>
				</Col>
			</Row>
		</div>
	)
}

export default NavBar
