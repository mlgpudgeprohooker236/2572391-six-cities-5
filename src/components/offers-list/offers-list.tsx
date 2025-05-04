import { Offer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  className: string;
  cardClassName: string;
  offers: Offer[];
  onCardHover: (cardId: string) => void;
  onCardLeave: () => void;
}

export default function OffersList({ className, cardClassName, offers, onCardHover, onCardLeave }: OffersListProps) {
  return (
    <div className={className}>
      {offers.map((offer) => (
        <PlaceCard className={cardClassName} key={offer.id}
          offer={offer}
          onMouseEnter={() => onCardHover(offer.id)}
          onMouseLeave={() => onCardLeave()}
        />
      ))}
    </div>
  );
}
