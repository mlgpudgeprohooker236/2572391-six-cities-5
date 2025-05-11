import { memo } from 'react';
import { OfferPreview } from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import { PlaceCardOptionsType } from '../place-card/place-card-options';

type OffersListProps = {
  options: PlaceCardOptionsType;
  className: string;
  cardClassName: string;
  offers: OfferPreview[];
  onCardHover?: (cardId: string | null) => void;
}

function OffersList({ options, className, cardClassName, offers, onCardHover }: OffersListProps) {
  return (
    <div className={className}>
      {offers.map((offer) => (
        <PlaceCard options={options} className={cardClassName} key={offer.id}
          offer={offer}
          onMouseEnter={() => onCardHover ? onCardHover(offer.id) : null}
          onMouseLeave={() => onCardHover ? onCardHover(null) : null}
        />
      ))}
    </div>
  );
}

export default memo(OffersList);
