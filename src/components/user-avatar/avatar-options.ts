enum AvatarType {
  Host,
  Review
}

type AvatarOptionsType = {
  wrapperClassName: string;
  className: string;
  imgSize: number;
  imgHint: string;
}

const AvatarOptions: Record<keyof typeof AvatarType, AvatarOptionsType> = {
  Host: {
    wrapperClassName: 'offer__host-user',
    className: 'offer',
    imgSize: 74,
    imgHint: 'Host avatar'
  },
  Review: {
    wrapperClassName: 'reviews__user',
    className: 'reviews',
    imgSize: 54,
    imgHint: 'Reviews avatar'
  }
} as const;

export { AvatarOptions };
export type { AvatarOptionsType };
