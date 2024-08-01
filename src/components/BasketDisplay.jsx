import { getFormattedPrice, getProductWithId } from '../helpers';
import BasketItem from './BasketItem';
import { useBasketStore } from './useBasketStore';

export default function BasketDisplay({ basket }) {
	const basketIsEmpty = basket.length === 0;
	const basketDispatch = useBasketStore((state) => state.dispatch);
	return (
		<section className="basket">
			<h2 className="basket__heading">Warenkorb</h2>
			{basketIsEmpty && <strong>Warenkorb ist leer</strong>}
			{basketIsEmpty || (
				<>
					<ul className="basket__list">
						{basket.map((item) => (
							<BasketItem {...item} key={item.id} />
						))}
					</ul>
					<button onClick={() => basketDispatch({ action: 'emptyBasket' })}>
						Warenkorb leeren
					</button>
				</>
			)}

			{!basketIsEmpty && (
				<output className="basket__total">
					{getFormattedPrice(
						basket.reduce((total, { id, amount }) => {
							const product = getProductWithId(id);
							if (!product) return total;
							return total + product.price * amount;
						}, 0)
					)}
					{/* Hier den Gesamtpreis anzeigen. Wenn der Warenkorb leer ist,
				soll das output-Element ausgeblendet werden. */}
				</output>
			)}
		</section>
	);
}
