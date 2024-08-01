import { Button, Heading, Text } from 'react-aria-components';
import { getFormattedPrice } from '../helpers';
import { useBasketStore } from './useBasketStore';

export default function Product({ title, image, price, sale, id }) {
	const cssClasses = `product ${sale ? 'product--sale' : ''}`;
	const basketDispatch = useBasketStore((state) => state.dispatch);

	return (
		<article className={cssClasses}>
			<Text role="img" className="product__image">
				{image}
			</Text>
			<Heading level="3" className="product__heading">
				{title}
			</Heading>
			<Text className="product__price">{getFormattedPrice(price)}</Text>
			<Button
				aria-label={`${title} kaufen`}
				onPress={() => basketDispatch({ id, action: 'add' })}
			>
				Kaufen
			</Button>
		</article>
	);
}
