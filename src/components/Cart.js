import React, { useState } from 'react'
import shoppingCartImg from './../assets/img/shopping-cart.svg'
import CartForm from './CartForm';
import CartTable from './CartTable';

export default function Cart() {
	const [checkout, setCheckout] = useState(false)

	const handleCheckout = () => {
		setCheckout(true)
	};

	const handleCancel = () => {
		setCheckout(false)
	};

	return (
		<>
			<img className="emptyCartImg" src={shoppingCartImg} />
			<div className="cartTitle">Your shopping cart</div>
			<div className="cartContainer">
				<CartTable disableDelete={checkout}/>
				{
					!checkout &&
					(
						<button className="blueButton checkoutButton" onClick={() => handleCheckout()}>Checkout</button>
					)
				}
			</div>
			{
				checkout &&
				(<CartForm onCancel={handleCancel}/>)
			}
		</>
	)
}
