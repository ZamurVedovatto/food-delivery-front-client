import React from 'react'
import { Link } from "react-router-dom"
import shoppingCartImg from './../assets/img/shopping-cart.svg'

export default function CartThankYou() {
	return (
		<div className="container">
			<div className="cartCenter">
				<div className="emptyCartContainer">
					<div className="emptyCart">
						<img className="emptyCartImg" src={shoppingCartImg} />
						<div className="emptyCartText">Thank you for your purchase!</div>
						<div className="emptyCartText">We will contact you soon.</div>
						<Link to="/"><button className="blueButton">Back to catalog</button></Link>
					</div>
				</div>
			</div>
		</div>
	)
}
