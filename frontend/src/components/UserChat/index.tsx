import React, { useState } from 'react'
import { CloseCircleOutlined, MessageOutlined } from '@ant-design/icons'
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
		</div>
	)
}

export default UserChat
