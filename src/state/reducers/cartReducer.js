const initial = {
	items: []
}

const cartReducer = (state = initial, action) => {
	const {type, payload} = action
	console.log(type, payload)

	switch (type) {
		case 'ADD_ITEM_TO_CART':
			return {
				items: [...state.items, payload.item]
			}
		default:
			return state
	}
}

export default cartReducer
