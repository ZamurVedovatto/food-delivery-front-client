import React from 'react'
import { Link } from "react-router-dom";
import shoppingCartImg from './../assets/img/shopping-cart.svg'

export default function CartEmpty() {
	return (
		<div className="emptyCartContainer">
			<div className="emptyCart">
				<img className="emptyCartImg" src={shoppingCartImg} />
				<div className="emptyCartText">YOUR CART IS EMPTY</div>
				<Link to="/"><button className="blueButton">Back to catalog</button></Link>
			</div>
		</div>
	)
}
