import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const useBasketStore = create()(
	immer((set) => ({
		basket: getInitialBasket(),
		dispatch: (args) => set((state) => basketReducer(state, args)),
	}))
);

function getInitialBasket() {
	try {
		const basket = JSON.parse(localStorage.getItem('basket') || '[]');
		return Array.isArray(basket) ? basket : [];
	} catch (error) {
		console.log(error);
		return [];
	}
}

function basketReducer({ basket }, { id, action }) {
	const productNotInBasket = !basket.some((item) => item.id === id);

	switch (action) {
		case 'add':
			// Wenn das Produkt nicht im Warenkorb ist, wird ein neuer Eintrag hinzugefügt
			if (productNotInBasket) {
				basket.push({ id, amount: 1 });
				break;
			}
			basket.find((item) => item.id === id).amount++;
			break;
		case 'subtract':
			basket.find((item) => item.id === id && item.amount >= 1).amount--;
			break;
		case 'remove':
			// löscht den Eintrag für ein bestimmtes Produkt aus dem Warenkorb
			return { basket: basket.filter((item) => item.id !== id) };
		case 'emptyBasket':
			// löscht den gesamten Warenkorb
			return { basket: [] };
	}
}
