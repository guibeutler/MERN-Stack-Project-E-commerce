import React, { useState, useEffect } from 'react'
import { UpOutlined } from '@ant-design/icons'
import './style.css'

function ScrollToTop() {
	const [showButton, setShowButton] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > 50) {
				setShowButton(true)
			} else {
				setShowButton(false)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const handleClick = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		})
	}

	return (
		showButton && (
			<button className="scroll-to-top-button" onClick={handleClick}>
				<UpOutlined />
			</button>
		)
	)
}

export default ScrollToTop
