// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React from 'react'
// import { Col, List } from 'antd'
// import { useNavigate } from 'react-router-dom'
// import {
// 	ArrowLeftOutlined,
// 	InboxOutlined,
// 	LineChartOutlined,
// 	MessageOutlined,
// 	UnorderedListOutlined,
// 	UserOutlined,
// } from '@ant-design/icons'
// import { useMediaQuery } from 'react-responsive'

// type MenuItem = {
// 	url: string
// 	icon: React.ReactNode
// 	label?: string
// }

// function AdminNavbar() {
// 	const navigate = useNavigate()
// 	const isMobile = useMediaQuery({ maxWidth: 1120 })

// 	const getMenuItem = ({ url, icon, label }: MenuItem) => {
// 		const iconWithLabel = React.cloneElement(icon as React.ReactElement, {
// 			'aria-label': label,
// 		})

// 		return (
// 			<a
// 				onClick={() => navigate(url)}
// 				style={window.location.href.includes(url) ? { fontWeight: 'bold' } : {}}
// 			>
// 				{iconWithLabel} {label}
// 			</a>
// 		)
// 	}

// 	const menuList: MenuItem[] = [
// 		{ url: '/admin/orders', icon: <UnorderedListOutlined />, label: 'Pedidos' },
// 		{ url: '/admin/products', icon: <InboxOutlined />, label: 'Produtos' },
// 		{ url: '/admin/users', icon: <UserOutlined />, label: 'Usuários' },
// 		{ url: '/admin/chats', icon: <MessageOutlined />, label: 'Mensagens' },
// 		{
// 			url: '/admin/analytics',
// 			icon: <LineChartOutlined />,
// 			label: 'Estatísticas',
// 		},
// 		{ url: '/logout', icon: <ArrowLeftOutlined />, label: 'Sair' },
// 	]

// 	const menuListMobile: MenuItem[] = [
// 		{ url: '/logout', icon: <ArrowLeftOutlined /> },
// 		{ url: '/admin/orders', icon: <UnorderedListOutlined /> },
// 		{ url: '/admin/products', icon: <InboxOutlined /> },
// 		{ url: '/admin/users', icon: <UserOutlined /> },
// 		{ url: '/admin/chats', icon: <MessageOutlined /> },
// 		{
// 			url: '/admin/analytics',
// 			icon: <LineChartOutlined />,
// 			label: 'Estatísticas',
// 		},
// 	]

// 	return (
// 		<Col>
// 			{isMobile ? (
// 				<List
// 					grid={{ column: 6 }}
// 					// size="small"
// 					// bordered
// 					dataSource={menuListMobile}
// 					renderItem={({ url, icon, label }: MenuItem) => (
// 						<List.Item>{getMenuItem({ url, icon })}</List.Item>
// 					)}
// 				/>
// 			) : (
// 				<List
// 					size="small"
// 					bordered
// 					dataSource={menuList}
// 					renderItem={({ url, icon, label }: MenuItem) => (
// 						<List.Item>{getMenuItem({ url, icon, label })}</List.Item>
// 					)}
// 				/>
// 			)}
// 		</Col>
// 	)
// }

// export default AdminNavbar

import React, { useState } from 'react'
import {
	AppstoreOutlined,
	ContainerOutlined,
	DesktopOutlined,
	MailOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	PieChartOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Button, Menu } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: 'group'
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		type,
	} as MenuItem
}

const items: MenuItem[] = [
	getItem('Option 1', '1', <PieChartOutlined />),
	getItem('Option 2', '2', <DesktopOutlined />),
	getItem('Option 3', '3', <ContainerOutlined />),

	getItem('Navigation One', 'sub1', <MailOutlined />, [
		getItem('Option 5', '5'),
		getItem('Option 6', '6'),
		getItem('Option 7', '7'),
		getItem('Option 8', '8'),
	]),

	getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
		getItem('Option 9', '9'),
		getItem('Option 10', '10'),

		getItem('Submenu', 'sub3', null, [
			getItem('Option 11', '11'),
			getItem('Option 12', '12'),
		]),
	]),
]

const AdminNavbar: React.FC = () => {
	const [collapsed, setCollapsed] = useState(false)

	const toggleCollapsed = () => {
		setCollapsed(!collapsed)
	}

	return (
		<div style={{ width: 256 }}>
			<Button
				type="primary"
				onClick={toggleCollapsed}
				style={{ marginBottom: 16 }}
			>
				{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
			</Button>
			<Menu
				defaultSelectedKeys={['1']}
				defaultOpenKeys={['sub1']}
				mode="inline"
				theme="dark"
				inlineCollapsed={collapsed}
				items={items}
			/>
		</div>
	)
}

export default AdminNavbar
