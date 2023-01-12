import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Row, Col, Input, Space, Badge, Dropdown, Menu, Button } from 'antd'
import {
	ShoppingOutlined,
	UserOutlined,
	CaretDownOutlined,
} from '@ant-design/icons'

import './style.css'

const Header = () => {
	const [classOn, setClassOn] = useState(false)
	const navigate = useNavigate()

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
		<header>
			<div className="container">
				<h2>Da Margi</h2>

				<div
					className={classOn ? 'menu-section on' : 'menu-section'}
					onClick={() => setClassOn(!classOn)}
				>
					<div className="menu-toggle">
						<div className="one"></div>
						<div className="two"></div>
						<div className="three"></div>
					</div>

					<nav>
						<ul>
							<li>
								<a href="/">user</a>
							</li>
							<li>
								<a href="/">login</a>
							</li>
							<li>
								<a href="/">meus pedidos</a>
							</li>
							<li>
								<a href="/">meu perfil</a>
							</li>
							<li>
								<Badge count={5} size={'small'}>
									<ShoppingOutlined
										className="icon"
										style={{
											fontSize: '18px',
										}}
									/>
								</Badge>
							</li>
							<li>
								<a href="/">logout</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header
