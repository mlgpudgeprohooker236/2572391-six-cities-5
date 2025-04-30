import { User } from './user';

type Review = {
  id: string;
  user: User;
  rating: number;
  comment: string;
  date: Date;
}

export type { Review };
