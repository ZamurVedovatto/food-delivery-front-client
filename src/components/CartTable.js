import React, { useState } from 'react'
import config from "../config";
import displayCurrency from '../helpers/displayCurrency';

export default function CartTable() {
	const [cartTotal, setCartTotal] = useState({
		totalPrice: 100,
		totalQty: 3
	})
	const [disableDelete, setDisableDelete] = useState(false)
	const [products, setProducts] = useState([
		{
			title: 'Sushi and caviar mix',
			description: 'Sushi & caviar mix',
			image: {
				id: '368d575c-f0ed-11e9-a713-2a2ae2dbcce4',
				filename: 'https://api.food-delivery.mishast.com/files/2780dba2-f18e-11e9-81b4-2a2ae2dbcce4/greece_salad.jpg'
			},
			price: '10.99'
		},
		{
			title: 'Mix of 23 sushi',
			description: '23 Sushi Mix',
			image: {
				id: '56945ecc-f0ef-11e9-81b4-2a2ae2dbcce4',
				filename: 'https://api.food-delivery.mishast.com/files/2780dba2-f18e-11e9-81b4-2a2ae2dbcce4/greece_salad.jpg'
			},
			price: '15'
		}
	])

	const handleDelete = (product_id) => {
		console.log('Deleting ' + product_id);
		// this.props.updateCartItem(product_id, 0);
	};

	const onSetCartTotal = () => {
		console.log("onSetCartTotal")
		// let cartTotal = this.props.cart.reduce( (acc, item) => {
		// 	let {totalPrice, totalQty} = acc;
		// 	console.log('acc');
		// 	console.log(acc);
		// 	let price = parseFloat(item.price);
		// 	totalPrice += price * item.qty;
		// 	totalQty += item.qty;
		// 	return {totalPrice, totalQty};
		// },
		// { totalPrice: 0, totalQty: 0}
		// );
		// console.log(cartTotal);
	}

	return (
		<>
			{
				products?.map((item) => {
					// let imageUrl = config.apiBaseUrl + 'files/' + item.image.id + '/' + item.image.filename;

					let price = parseFloat(item.price);
					let total = price * item.qty;

					return (
						<div className="cart-prod">
							<div className="cart-prod-img-cont">
								<img className="cart-prod-img" src={item.image.filename} />
							</div>
							<div className="cart-prod-det">
							<div className="cart-prod-head">{item.title}</div>
							<p className="cart-prod-desc">{item.description}</p>
							</div>
							<div className="cart-prod-prc">${displayCurrency(price)}</div>
							<div className="cart-prod-mul">x</div>
							<div className="cart-prod-qty">
								<input type="text" value={item.qty} />
							</div>
							<div className="cart-prod-removal">
							{
									!disableDelete &&
									(
										<button className="remove-cart-prod" onClick={() => {
											handleDelete(item.product_id)
										}}>
											Remove
										</button>
									)
							}
							</div>
							<div className="cart-prod-prc-spacer" />
							<div className="cart-prod-line-prc">${displayCurrency(total)}</div>
						</div>
					);
				})
			}
			<div className="cart-prod">
				<div className="cart-total">TOTAL</div>
				<div className="cart-prod-line-prc">${displayCurrency(cartTotal.totalPrice)}</div>
			</div>
		</>
	)
}
