import React, { useState } from 'react'
import { Col, Row, List, Avatar, Modal, Timeline, Input } from 'antd'
import AdminNavbar from '@components/AdminNavbar'
// import './style.css'

function AdminChatRoom() {
	const [selectedUser, setSelectedUser] = useState(null)
	const [modalVisible, setModalVisible] = useState(false)
	const [messages, setMessages] = useState([])

	const users = [
		{
			id: 1,
			name: 'User A',
			avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
			lastMessage: 'Olá, como vai?',
			messages: [
				{
					id: 1,
					message: 'Olá, como vai?',
					sender: 'User A',
					timestamp: '2023-02-28T12:34:56.000Z',
				},
				{
					id: 2,
					message: 'Estou bem, obrigado. E você?',
					sender: 'User B',
					timestamp: '2023-02-28T12:35:12.000Z',
				},
				{
					id: 3,
					message: 'Tudo bem também.',
					sender: 'User A',
					timestamp: '2023-02-28T12:35:22.000Z',
				},
			],
		},
		{
			id: 3,
			name: 'User C',
			avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
			lastMessage: 'E aí, tudo certo?',
			messages: [
				{
					id: 1,
					message: 'E aí, tudo certo?',
					sender: 'User C',
					timestamp: '2023-02-28T12:34:56.000Z',
				},
				{
					id: 2,
					message: 'Sim, tudo tranquilo por aqui. E contigo?',
					sender: 'User A',
					timestamp: '2023-02-28T12:35:12.000Z',
				},
				{
					id: 3,
					message: 'Tudo certo também.',
					sender: 'User C',
					timestamp: '2023-02-28T12:35:22.000Z',
				},
			],
		},
	]

	const handleUserClick = (user) => {
		setSelectedUser(user)
		setModalVisible(true)
	}

	const handleModalClose = () => {
		setSelectedUser(null)
		setModalVisible(false)
	}

	const handleSendMessage = (message) => {
		const newMessage = {
			id: messages.length + 1,
			message,
			sender: 'User A', // Neste exemplo, sempre enviamos mensagens como User A
			timestamp: new Date().toISOString(),
		}
		setMessages([...messages, newMessage])
	}

	return (
		<Row
			gutter={[8, 8]}
			style={{
				display: 'flex',
				justifyContent: 'space-around',
				alignItems: 'center',
			}}
		>
			<Col>
				<AdminNavbar />
			</Col>
			<Col>
				<List
					size="small"
					itemLayout="horizontal"
					dataSource={users}
					renderItem={(user) => (
						<List.Item onClick={() => handleUserClick(user)}>
							<List.Item.Meta
								avatar={<Avatar src={user.avatar} />}
								title={user.name}
								description={user.lastMessage}
							/>
						</List.Item>
					)}
				/>
				<Modal
					title={selectedUser ? selectedUser.name : ''}
					visible={modalVisible}
					onCancel={handleModalClose}
					footer={[
						<Input.Search
							key="input"
							enterButton="Enviar"
							placeholder="Digite sua mensagem"
							onSearch={handleSendMessage}
						/>,
					]}
				>
					<Timeline>
						{selectedUser &&
							selectedUser.messages.map((message) => (
								<Timeline.Item key={message.id}>
									<b>{message.sender}:</b> {message.message}
								</Timeline.Item>
							))}
					</Timeline>
				</Modal>
			</Col>
		</Row>
	)
}

export default AdminChatRoom
