/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Alert, Button, Col, Form, Input, Row } from 'antd'
import { useNavigate } from 'react-router-dom'

const onFinish = (values: any) => {
	console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
	console.log('Failed:', errorInfo)
}

function Register() {
	const [loadings, setLoadings] = useState<boolean[]>([])
	const navigate = useNavigate()

	const enterLoading = (index: number) => {
		setLoadings((prevLoadings) => {
			const newLoadings = [...prevLoadings]
			newLoadings[index] = true
			return newLoadings
		})

		setTimeout(() => {
			setLoadings((prevLoadings) => {
				const newLoadings = [...prevLoadings]
				newLoadings[index] = false
				return newLoadings
			})
		}, 6000)
	}

	return (
		<Row style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
			<Col style={{ width: '350px' }}>
				<h1>Cadastro</h1>
				<Form
					layout="vertical"
					name="basic"
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item
						label="Nome"
						name="username"
						rules={[{ required: true, message: 'Por favor, insira seu nome!' }]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="Sobrenome"
						name="lastname"
						rules={[
							{ required: true, message: 'Por favor, insira seu sobrenome!' },
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="E-mail"
						name="email"
						rules={[
							{ required: true, message: 'Por favor, insira seu e-mail!' },
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						hasFeedback
						label="Senha"
						name="password"
						rules={[
							{ required: true, message: 'Por favor, insira sua senha!' },
						]}
					>
						<Input.Password />
					</Form.Item>
					<Form.Item
						hasFeedback
						label="Confirmar Senha"
						name="confirm"
						dependencies={['password']}
						rules={[
							{ required: true, message: 'Por favor, insira sua senha!' },
							({ getFieldValue }) => ({
								validator(_, value) {
									if (!value || getFieldValue('password') === value) {
										return Promise.resolve()
									}
									return Promise.reject(new Error('As senhas são diferentes!'))
								},
							}),
						]}
					>
						<Input.Password />
					</Form.Item>
					<Form.Item>
						{loadings[1] ? (
							<Button
								type="primary"
								htmlType="submit"
								loading={loadings[1]}
								onClick={() => enterLoading(1)}
							>
								Enviando
							</Button>
						) : (
							<Button
								type="primary"
								htmlType="submit"
								loading={loadings[1]}
								onClick={() => enterLoading(1)}
							>
								Enviar
							</Button>
						)}
						<br />
						Já possui conta? <a onClick={() => navigate('/login')}>Login!</a>
					</Form.Item>
				</Form>
				<Alert message="O e-mail já está cadastrado!" type="error" />
			</Col>
		</Row>
	)
}

export default Register
