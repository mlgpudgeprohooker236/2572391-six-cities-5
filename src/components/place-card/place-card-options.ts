export type PlaceCardOptionsType = {
  imageWidth: number;
  imageHeight: number;
}

enum PlaceCardType {
  Offer,
  Favorite
}

export const PlaceCardOptions: Record<keyof typeof PlaceCardType, PlaceCardOptionsType> = {
  Offer: {
    imageWidth: 260,
    imageHeight: 200
  },
  Favorite: {
    imageWidth: 150,
    imageHeight: 110
  }
} as const;
