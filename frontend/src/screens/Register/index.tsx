/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Button, Col, Form, Input, Row } from 'antd'
import { useNavigate } from 'react-router-dom'

const onFinish = (values: any) => {
	console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
	console.log('Failed:', errorInfo)
}

function Register() {
	const navigate = useNavigate()
	return (
		<Row style={{ display: 'flex', justifyContent: 'center', margin: '50px' }}>
			<Col style={{ width: '350px' }}>
				<h1>Cadastro</h1>
				<Form
					layout="vertical"
					name="basic"
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 16 }}
					style={{ maxWidth: 600 }}
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
						rules={[{ required: true, message: 'Please input your password!' }]}
					>
						<Input.Password />
					</Form.Item>
					<Form.Item
						hasFeedback
						label="Confirmar Senha"
						name="confirm"
						dependencies={['password']}
						rules={[
							{ required: true, message: 'Please input your password!' },
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
						<Button type="primary" htmlType="submit">
							Submit
						</Button>{' '}
						<br />
						Ou faça <a onClick={() => navigate('/login')}>Login!</a>
					</Form.Item>
				</Form>
			</Col>
		</Row>
	)
}

export default Register
