import React from 'react'
import { Carousel as AntdCarousel } from 'antd'
import Img1 from '../../assets/imgCarousel/img1.png'
import Img2 from '../../assets/imgCarousel/img2.jpg'
import Img3 from '../../assets/imgCarousel/img3.jpeg'

const imgCarousel = [Img1, Img2, Img3, Img1]

// const contentStyle: React.CSSProperties = {
// 	height: '300px',
// 	color: '#fff',
// 	lineHeight: '300px  ',
// 	textAlign: 'center',
// 	backgroundImage: `url(${Img1})`,
// 	backgroundSize: 'cover',
// }

function Carousel() {
	const imgCarousel = [Img1, Img2, Img3, Img1]

	return (
		<div>
			<AntdCarousel autoplay>
				{/* {imgCarousel.map((index, image) => (
					<div
						key={index}
						style={{
							backgroundColor: 'grey',
							height: '300px',
							lineHeight: '300px  ',
							textAlign: 'center',
							backgroundImage: `url${image}`,
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundAttachment: 'fixed',
							backgroundPosition: 'center',
						}}
					>
						<h3>funciona?</h3>
					</div>
				))} */}

				<div>
					<p
						style={{
							height: '300px',
							color: '#fff',
							lineHeight: '300px  ',
							textAlign: 'center',
							backgroundImage: `url(${Img1})`,
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundAttachment: 'fixed',
							backgroundPosition: 'center',
						}}
					/>
				</div>
				<div>
					<p
						style={{
							height: '300px',
							color: '#fff',
							lineHeight: '300px  ',
							textAlign: 'center',
							backgroundImage: `url(${Img2})`,
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundAttachment: 'fixed',
							backgroundPosition: 'center',
						}}
					/>
				</div>
				<div>
					<p
						style={{
							height: '300px',
							color: '#fff',
							lineHeight: '300px  ',
							textAlign: 'center',
							backgroundImage: `url(${Img3})`,
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundAttachment: 'fixed',
							backgroundPosition: 'center',
						}}
					/>
				</div>
			</AntdCarousel>
		</div>
	)
}

export default Carousel
