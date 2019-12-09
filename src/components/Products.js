import React, {useContext} from 'react';
import Product from './Product';
import ProductContext from '../contexts/ProductContext';

const Products = () => {
	const {products, addItem} = useContext(ProductContext);
	// ??? could this have been setProducts

	return (
		<div className="products-container">
			{products.map(product => (
				<Product key={product.id} product={product} addItem={addItem}/>
			))}
		</div>
	);
};

export default Products;
