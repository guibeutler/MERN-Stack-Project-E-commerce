import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Row, Col, Input, Space, Badge, Dropdown, Menu, Button } from 'antd'
import {
	ShoppingOutlined,
	UserOutlined,
	CaretDownOutlined,
} from '@ant-design/icons'
import './style.css'

const { Search } = Input

function NavBar() {
	const navigate = useNavigate()
	const [collapsed, setCollapsed] = useState(true)

	const handleNavigate = (key: string) => {
		switch (key) {
			case '1':
				navigate('/user/my-orders')
				break
			case '2':
				navigate('/user')
				break
			case '3':
				navigate('/logout')
				break
			case '4':
				navigate('/')
				break
			case '5':
				navigate('/')
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
				<h2 className="logo" onClick={() => navigate('/')}>
					Da Margi
				</h2>
				{window.location.pathname === '/' ? (
					<Search
						placeholder="Pesquisar produto"
						allowClear
						style={{ width: 200 }}
					/>
				) : (
					''
				)}

				<Col>
					<Space>
						<Menu
							theme="light"
							mode="horizontal"
							defaultSelectedKeys={['1']}
							style={{ lineHeight: '64px' }}
							collapsed={collapsed}
						>
							<Dropdown
								trigger={['click']}
								overlay={
									<Menu onClick={({ key }) => handleNavigate(key)}>
										<Menu.Item key="4">Login</Menu.Item>
										<Menu.Item key="5">Cadastrar</Menu.Item>
									</Menu>
								}
							>
								<p onClick={(e) => e.preventDefault()}>
									<Space>
										<Badge dot>
											<UserOutlined
												className="icon"
												style={{ fontSize: '22px' }}
											/>
										</Badge>
									</Space>
								</p>
							</Dropdown>
							<Badge count={5} size={'small'}>
								<ShoppingOutlined
									className="icon"
									style={{ fontSize: '22px' }}
								/>
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
										<CaretDownOutlined />
									</Space>
								</p>
							</Dropdown>
						</Menu>
					</Space>
				</Col>
			</Row>
		</div>
	)
}

export default NavBar
