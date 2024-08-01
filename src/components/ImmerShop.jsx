import { useEffect } from 'react';

import BasketDisplay from './BasketDisplay';
import ProductsList from './ProductsList';
import { useBasketStore } from './useBasketStore';

export default function Shop() {
	const basket = useBasketStore((state) => state.basket);

	//save basket to localStorage
	useEffect(
		() => localStorage.setItem('basket', JSON.stringify(basket)),
		[basket]
	);

	return (
		<div className="shop">
			<ProductsList />
			<BasketDisplay basket={basket} />
		</div>
	);
}
