import React, { useState } from 'react'
import { Badge } from 'antd'
import {
	ShoppingOutlined,
	UserOutlined,
	CaretDownOutlined,
} from '@ant-design/icons'

import './style.css'

const Header = () => {
	const [classOn, setClassOn] = useState(false)

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
								<a href="/user">user</a>
							</li>
							<li>
								<a href="/">login</a>
							</li>
							<li>
								<a href="/user/my-orders">meus pedidos</a>
							</li>
							<li>
								<a href="/user">meu perfil</a>
							</li>
							<li>
								<Badge className="badge" count={5} size={'small'}>
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
