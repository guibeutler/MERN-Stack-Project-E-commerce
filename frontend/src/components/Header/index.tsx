import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Badge, Row, Col, Typography, Space, Input } from 'antd'
import {
	ShoppingOutlined,
	UserOutlined,
	CaretDownOutlined,
} from '@ant-design/icons'
import './style.css'
const { Text } = Typography
const { Search } = Input

const Header = () => {
	const [classOn, setClassOn] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const navigate = useNavigate()

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

	return (
		<header className={scrolled ? 'scrolled' : ''}>
			<Row className="container">
				<Row>
					<Col>
						<h2 onClick={() => navigate('/')}>Da Margi</h2>
					</Col>
				</Row>
				<div
					className={classOn ? 'menu-section on' : 'menu-section'}
					onClick={() => setClassOn(!classOn)}
				>
					<div className="menu-toggle">
						<div className="one"></div>
						<div className="two"></div>
						<div className="three"></div>
					</div>
					<Row className="style-menu">
						<Space>
							<Col>
								<UserOutlined />
								<Badge dot>
									<Text onClick={() => navigate('/user')}>user</Text>
								</Badge>
							</Col>
							<Col>
								<Text>login</Text>
							</Col>
							<Col>
								<Text onClick={() => navigate('/user/my-orders')}>
									meus pedidos
								</Text>
							</Col>
							<Col>
								<Text onClick={() => navigate('/user')}>meu perfil</Text>
							</Col>
							<Col>
								<Badge className="badge" count={3} size={'small'}>
									<ShoppingOutlined
										className="icon"
										style={{
											fontSize: '18px',
										}}
									/>
								</Badge>
							</Col>
							<Col>
								<Text>logout</Text>
							</Col>
						</Space>
					</Row>
				</div>
			</Row>
		</header>
	)
}

export default Header
