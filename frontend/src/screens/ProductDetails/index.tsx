import React from 'react'
import {
	Col,
	Layout,
	Row,
	Image,
	List,
	Alert,
	Form,
	Button,
	InputNumber,
	Select,
} from 'antd'
import moment from 'moment'
import { Rating } from 'react-simple-star-rating'
import AlertAddToCart from '@components/Alerts/addedToCart'
import img1 from '@assets/imgCarousel/img1.png'
import img2 from '@assets/imgCarousel/img2.jpg'
import img3 from '@assets/imgCarousel/img3.jpeg'
import TextArea from 'antd/es/input/TextArea'

const currentDateTime = moment().local().format('DD/MM/YYYY')

const handleChange = (value: string) => {
	console.log(`selected ${value}`)
}

function ProductDetails() {
	const product = [
		'Product Name',
		'Price',
		'Description',
		<Rating size={20} readonly initialValue={5} />,
	]
	function onChange(value: number) {
		console.log('changed', value)
	}
	const data = [
		'Status: em estoque',
		'Preco: R$ 55,00',
		'Quantidade: ',
		<InputNumber
			defaultValue={1}
			min={1}
			max={100}
			step={1}
			onChange={onChange}
		/>,
		<Button type="default">Add to cart</Button>,
	]

	return (
		<Layout style={{ backgroundColor: '#fff' }}>
			<AlertAddToCart />
			<Row>
				<Col
					style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
					xs={{ span: 5, offset: 1 }}
					lg={{ span: 6, offset: 2 }}
				>
					<Image width={300} src={img1} />
					<Image width={300} src={img2} />
					<Image width={300} src={img3} />
				</Col>
				<Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
					<Row>
						<Col md={8}>
							<List
								style={{ width: '25vw' }}
								bordered
								size="large"
								dataSource={product}
								renderItem={(item) => <List.Item>{item}</List.Item>}
							/>
						</Col>
					</Row>
					<Row>
						<Col>
							<h5>REVIEWS</h5>
							<List>
								{Array.from({ length: 4 }).map((item, idx) => {
									return (
										<List
											key={idx}
											bordered
											style={{ margin: '5px', width: '25vw' }}
										>
											<List.Item>Jonh Doe</List.Item>
											<List.Item>
												<Rating size={20} readonly initialValue={5} />
											</List.Item>
											<List.Item>{currentDateTime}</List.Item>
											<List.Item>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit. Maecenas vel metus vel massa vehicula malesuada.
													Vestibulum ante ipsum primis in.
												</p>
											</List.Item>
										</List>
									)
								})}
							</List>
						</Col>
					</Row>
					<h5>Quer deixar sua avaliacao?</h5>
					<Alert
						message="Faca Login antes de enviar uma mensagem"
						type="error"
					/>
					<Form layout="vertical">
						<Form.Item label="Text Area">
							<TextArea />
						</Form.Item>
						<Form.Item label="Classificacao">
							<Select
								defaultValue="5 (muito bom)"
								style={{ width: 150 }}
								onChange={handleChange}
								options={[
									{ value: '5', label: '5 (muito bom)' },
									{ value: '4', label: '4 (bom)' },
									{ value: '3', label: '3 (normal)' },
									{ value: '2', label: '2 (ruim)' },
									{ value: '1', label: '1 (muito ruim)' },
								]}
							/>
						</Form.Item>
						<Form.Item>
							<Button>Enviar</Button>
						</Form.Item>
					</Form>
				</Col>
				<Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
					<List
						style={{ width: '180px' }}
						bordered
						size="small"
						dataSource={data}
						renderItem={(item) => <List.Item> {item}</List.Item>}
					/>
				</Col>
			</Row>
		</Layout>
	)
}

export default ProductDetails
