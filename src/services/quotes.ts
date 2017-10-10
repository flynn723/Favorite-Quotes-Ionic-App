import { Quote } from '../data/quote.interface';

export class QuotesService {
	private favoriteQuotes: Quote[] = [];

	addQuoteToFavorites(quote: Quote) {
		this.favoriteQuotes.push(quote);
		console.dir(this.favoriteQuotes);
	}

	removeQuoteToFavorites(quote: Quote, id: number) {
		const position = this.favoriteQuotes.findIndex( (quoteEl: Quote) => {
			return (quoteEl.id == quote.id);
		});
		this.favoriteQuotes.splice( position, id );
	}

	getFavoriteQuotes() {
		return this.favoriteQuotes.slice(); // return copy of favoriteQuotes
	}
}