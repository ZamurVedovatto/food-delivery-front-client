import React from 'react'
import shoppingCartImg from './../assets/img/shopping-cart.svg'

export default function Cart() {
	return (
		<>
			<img className="emptyCartImg" src={shoppingCartImg} />
			<div className="cartTitle">Your shopping cart</div>
			<div className="cartContainer">
				<CartTable disableDelete={this.state.checkout}/>
				{
					!this.state.checkout &&
					(
						<button className="blueButton checkoutButton" onClick={this.handleCheckout}>Checkout</button>
					)
				}
			</div>
			{
				this.state.checkout &&
				(<CartForm onCancel={this.handleCancel}/>)
			}
		</>
	)
}
