import { Button } from 'react-aria-components';
import { getFormattedPrice } from '../helpers';
import { useBasketStore } from './useBasketStore';

export default function Product({ title, image, price, sale, id }) {
	const cssClasses = `product ${sale ? 'product--sale' : ''}`;
	const basketDispatch = useBasketStore((state) => state.dispatch);

	return (
		<article className={cssClasses}>
			<div className="product__image">{image}</div>
			<h3 className="product__heading">{title}</h3>
			<p className="product__price">{getFormattedPrice(price)}</p>
			<Button
				aria-label={`${title} kaufen`}
				onPress={() => basketDispatch({ id, action: 'add' })}
			>
				Kaufen
			</Button>
		</article>
	);
}
