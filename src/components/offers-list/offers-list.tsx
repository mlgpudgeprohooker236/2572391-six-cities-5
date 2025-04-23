import { Offer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  offers: Offer[];
  onCardHover: (cardId: string) => void;
  onCardLeave: () => void;
}

export default function OffersList({ offers, onCardHover, onCardLeave }: OffersListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard key={offer.id}
          offer={offer}
          onMouseEnter={() => onCardHover(offer.id)}
          onMouseLeave={() => onCardLeave()}
        />
      ))}
    </div>
  );
}
