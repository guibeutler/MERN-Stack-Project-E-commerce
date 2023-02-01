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
