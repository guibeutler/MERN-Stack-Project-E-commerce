import React, { useState } from 'react'
import { CloseCircleOutlined, MessageOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import './style.css'

function UserChat() {
	const [isChecked, setIsChecked] = useState(false)

	return (
		<div>
			<input
				type="checkbox"
				id="check"
				checked={isChecked}
				onChange={(e) => setIsChecked(e.target.checked)}
			/>
			<label className="chat-btn" htmlFor="check">
				<CloseCircleOutlined
					className="close"
					style={{ display: isChecked ? 'block' : 'none' }}
				/>
				<MessageOutlined
					className="comment"
					style={{ display: isChecked ? 'none' : 'block' }}
				/>
			</label>
			<div className="chat-wrapper">
				<div className="chat-header">
					<h6>Envie uma menssagem!</h6>
				</div>
				<div className="chat-form">
					<div className="chat-msg">
						{Array.from({ length: 10 }).map((_, id) => {
							return (
								<div key={id}>
									<p>
										<b>You:</b> Minha mensagem aqui!
									</p>
									<p>
										<b>Suporte:</b> Mensagem do suporte aqui!
									</p>
								</div>
							)
						})}
					</div>
				</div>
				<textarea
					id="clientChatMsg"
					className="form-control"
					placeholder="Escreva sua mensagem"
				></textarea>
				<div>
					<Button className="btn btn-sucess btn block">Enviar</Button>
				</div>
			</div>
		</div>
	)
}

export default UserChat

// import React, { useState } from 'react'
// import { Button, Tooltip, Modal, Form, Input } from 'antd'
// import { MessageOutlined } from '@ant-design/icons'

// const { TextArea } = Input

// const UserChat: React.FC = () => {
// 	const [visible, setVisible] = useState(false)
// 	const [form] = Form.useForm()

// 	const showModal = () => {
// 		setVisible(true)
// 	}

// 	const handleCancel = () => {
// 		setVisible(false)
// 	}

// 	const handleOk = () => {
// 		form.submit()
// 	}

// 	const onFinish = (values: any) => {
// 		console.log(values)
// 		setVisible(false)
// 	}

// 	return (
// 		<>
// 			<Modal
// 				title="Nova Mensagem"
// 				visible={visible}
// 				onOk={handleOk}
// 				onCancel={handleCancel}
// 			>
// 				<Form form={form} onFinish={onFinish}>
// 					<Form.Item
// 						name="subject"
// 						label="Assunto"
// 						rules={[{ required: true, message: 'Por favor insira um assunto' }]}
// 					>
// 						<Input />
// 					</Form.Item>
// 					<Form.Item
// 						name="message"
// 						label="Mensagem"
// 						rules={[
// 							{ required: true, message: 'Por favor insira uma mensagem' },
// 						]}
// 					>
// 						<TextArea rows={4} />
// 					</Form.Item>
// 				</Form>
// 			</Modal>
// 			<Tooltip title="Nova Mensagem">
// 				<Button
// 					type="primary"
// 					shape="circle"
// 					icon={<MessageOutlined />}
// 					size="large"
// 					onClick={showModal}
// 					style={{ position: 'fixed', bottom: '50px', right: '50px' }}
// 				/>
// 			</Tooltip>
// 		</>
// 	)
// }

// export default UserChat
