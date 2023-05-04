import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Badge, Row, Col, Typography, Menu, Drawer, Button } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { useMediaQuery } from 'react-responsive'
import './style.css'

const { Text } = Typography

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const navigate = useNavigate()

	const isMobile = useMediaQuery({ maxWidth: 1120 })

	useEffect(function () {
		function positionScroll() {
			if (window.scrollY > 10) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}
		window.addEventListener('scroll', positionScroll)
	}, [])

	const menuItems = (
		<Menu
			mode={isMobile ? 'inline' : 'horizontal'}
			style={{
				border: 'none',
				textAlign: 'center',
				width: isMobile ? '' : '580px',
				// backgroundColor: isMobile || scrolled ? '#e19563' : '',
				// transitionDuration: '0.3s',
			}}
		>
			<Menu.Item key="user">
				<Badge dot>
					<Text onClick={() => navigate('/user')}>usuario</Text>
				</Badge>
			</Menu.Item>
			<Menu.Item key="login">
				<Text onClick={() => navigate('/login')}>login</Text>
			</Menu.Item>
			<Menu.Item key="orders">
				<Text onClick={() => navigate('/user/my-orders')}>meus pedidos</Text>
			</Menu.Item>
			<Menu.Item key="profile">
				<Text onClick={() => navigate('/user')}>meu perfil</Text>
			</Menu.Item>
			<Menu.Item key="cart">
				<Badge className="badge" count={3} size={'small'}>
					<Text onClick={() => navigate('/cart')}>Carrinho</Text>
				</Badge>
			</Menu.Item>
			<Menu.Item key="logout">
				<Text>logout</Text>
			</Menu.Item>
		</Menu>
	)

	return (
		<header className={scrolled ? 'main-scrolled' : 'main'}>
			<Row
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					margin: '10px 20px',
				}}
			>
				<Col>
					<Text
						style={{ fontSize: '24px', fontWeight: 'bold' }}
						onClick={() => navigate('/')}
					>
						Da Margi
					</Text>
				</Col>
				<Col>
					{isMobile ? (
						<Button
							onClick={() => setIsOpen(true)}
							style={{ float: 'right', border: 'none' }}
							icon={<MenuOutlined />}
						/>
					) : (
						menuItems
					)}
				</Col>
			</Row>

			{isMobile ? (
				<Drawer
					width={200}
					style={{ backgroundColor: '#e19563' }}
					placement="right"
					closable={false}
					open={isOpen}
					onClose={() => setIsOpen(false)}
				>
					{menuItems}
				</Drawer>
			) : null}
		</header>

		// <header className={scrolled ? 'scrolled' : ''}>
		// 	<Row className="container">
		// 		<Row>
		// 			<Col>
		// 				<h2 onClick={() => navigate('/')}>Da Margi</h2>
		// 			</Col>
		// 		</Row>
		// 		<div
		// 			className={classOn ? 'menu-section on' : 'menu-section'}
		// 			onClick={() => setClassOn(!classOn)}
		// 		>
		// 			<div className="menu-toggle">
		// 				<div className="one"></div>
		// 				<div className="two"></div>
		// 				<div className="three"></div>
		// 			</div>
		// 			<Row className="style-menu">
		// 				<Space>
		// 					<Col>
		// 						<UserOutlined />
		// 						<Badge dot>
		// 							{/* <BellOutlined /> */}
		// 							<Text onClick={() => navigate('/user')}>user</Text>
		// 						</Badge>
		// 					</Col>
		// 					<Col>
		// 						<Text onClick={() => navigate('/login')}>login</Text>
		// 					</Col>
		// 					<Col>
		// 						<Text onClick={() => navigate('/user/my-orders')}>
		// 							meus pedidos
		// 						</Text>
		// 					</Col>
		// 					<Col>
		// 						<Text onClick={() => navigate('/user')}>meu perfil</Text>
		// 					</Col>
		// 					<Col>
		// 						<Badge className="badge" count={3} size={'small'}>
		// 							<ShoppingOutlined
		// 								className="icon"
		// 								style={{
		// 									fontSize: '18px',
		// 								}}
		// 								onClick={() => navigate('/cart')}
		// 							/>
		// 						</Badge>
		// 					</Col>
		// 					<Col>
		// 						<Text>logout</Text>
		// 					</Col>
		// 				</Space>
		// 			</Row>
		// 		</div>
		// 	</Row>
		// </header>
	)
}

export default Navbar
