import React, {useContext} from 'react';
import ShoppingCartItem from './ShoppingCartItem';
import CartContext from '../contexts/CartContext';

const ShoppingCart = () => {
	const cart = useContext(CartContext);
	// needed to destructure?
	
	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<ShoppingCartItem key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
