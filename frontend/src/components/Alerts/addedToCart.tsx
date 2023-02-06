import React, { useState } from 'react'
import { Alert, Button, Space } from 'antd'

function AlertAddToCart() {
	const [show, setShow] = useState(true)
	const handleClose = () => {
		setShow(false)
	}

	const handleGoToCart = () => {
		// adicione aqui a lógica para ir para o carrinho
	}

	const handleGoBack = () => {
		// adicione aqui a lógica para voltar para a lista
	}

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				marginTop: '5px',
			}}
		>
			{show && (
				<Alert
					style={{ width: '50%' }}
					message="Item adicionado ao carrinho com sucesso"
					type="success"
					showIcon
					closable
					onClose={handleClose}
					action={[
						<Button onClick={handleGoToCart}>Ir para o carrinho</Button>,
						<Button onClick={handleGoBack}>Voltar para a lista</Button>,
					]}
				/>
			)}
		</div>
	)
}

export default AlertAddToCart
