/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Col, List } from 'antd'
import { useNavigate } from 'react-router-dom'
import {
	ArrowLeftOutlined,
	InboxOutlined,
	LineChartOutlined,
	MessageOutlined,
	UnorderedListOutlined,
	UserOutlined,
} from '@ant-design/icons'

type MenuItem = {
	url: string
	icon: React.ReactNode
	label: string
}

function AdminNavbar() {
	const navigate = useNavigate()

	const getMenuItem = ({ url, icon, label }: MenuItem) => {
		const iconWithLabel = React.cloneElement(icon as React.ReactElement, {
			'aria-label': label,
		})

		return (
			<a
				onClick={() => navigate(url)}
				style={window.location.href.includes(url) ? { fontWeight: 'bold' } : {}}
			>
				{iconWithLabel} {label}
			</a>
		)
	}

	const menuList: MenuItem[] = [
		{ url: '/admin/orders', icon: <UnorderedListOutlined />, label: 'Pedidos' },
		{ url: '/admin/products', icon: <InboxOutlined />, label: 'Produtos' },
		{ url: '/admin/users', icon: <UserOutlined />, label: 'Usuários' },
		{ url: '/admin/chats', icon: <MessageOutlined />, label: 'Mensagens' },
		{
			url: '/admin/analytics',
			icon: <LineChartOutlined />,
			label: 'Estatísticas',
		},
		{ url: '/logout', icon: <ArrowLeftOutlined />, label: 'Sair' },
	]

	return (
		<Col>
			<List
				size="small"
				bordered
				dataSource={menuList}
				renderItem={({ url, icon, label }: MenuItem) => (
					<List.Item>{getMenuItem({ url, icon, label })}</List.Item>
				)}
			/>
		</Col>
	)
}

export default AdminNavbar
