import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Row, Col, Input, Space, Badge, Dropdown, Menu } from 'antd'
import { DownOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons'
import './style.css'
const { Search } = Input

function NavBar() {
	const navigate = useNavigate()

	const handleNavigate = (key: string) => {
		switch (key) {
			case '1':
				navigate('/user/my-orders')
				break
			case '2':
				navigate('/user/profile')
				break
			case '3':
				navigate('/logout')
				break
		}
	}

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
						<Badge dot>
							<UserOutlined className="icon" style={{ fontSize: '22px' }} />
						</Badge>

						<Badge count={5} size={'small'}>
							<ShoppingOutlined className="icon" style={{ fontSize: '22px' }} />
						</Badge>
						<Dropdown
							trigger={['click']}
							overlay={
								<Menu onClick={({ key }) => handleNavigate(key)}>
									<Menu.Item key="1">Meus pedidos</Menu.Item>
									<Menu.Item key="2">Meu perfil</Menu.Item>
									<Menu.Item key="3">Logout</Menu.Item>
								</Menu>
							}
						>
							<p onClick={(e) => e.preventDefault()}>
								<Space>
									Margi
									<DownOutlined />
								</Space>
							</p>
						</Dropdown>
					</Space>
				</Col>
			</Row>
		</div>
	)
}

export default NavBar
