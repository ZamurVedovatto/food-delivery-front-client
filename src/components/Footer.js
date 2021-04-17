import React from 'react'
import Logo from './Logo'

export default function Footer() {
	const year = new Date().getFullYear()
	return (
		<footer>
			<div className="container">
				<div className="footer_inside">
					<div className="copyright">
						{/* <Logo /> */}
						<div className="year">fooddelivery © {year}</div>
					</div>
					<div className="contacts">
						<p>fooddelivery@gmail.com</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
