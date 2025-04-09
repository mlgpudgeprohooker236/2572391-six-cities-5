import { useState } from 'react';
import { Offer } from '../../types/offer/offer';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  offers: Offer[];
}

export default function OffersList({ offers }: OffersListProps) {
  const [, setActiveCardById] = useState<string | null>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard key={offer.id}
          offer={offer}
          onMouseEnter={() => setActiveCardById(offer.id)}
          onMouseLeave={() => setActiveCardById(null)}
        />
      ))}
    </div>
  );
}
