export type Theme = 'light' | 'dark';
export interface ThemeState {
  currentTheme: Theme;
}
export interface ITweet {
  id: string;
  text: string;
  imageUrl?: string;
  timestamp: number;
  amountOfLikes: number;
  usersLikes: Array<string>;
  userId: string;
}
export interface TweetState {
  tweets: ITweet[];
}
export interface IDate {
  day?: number;
  month?: number;
  year?: number;
}
export interface UserState {
  displayName: string | null;
  phoneNumber: string | null;
  dateOfBirth: number | null;
  link?: string | null;
  uid: string | null;
  email: string | null;
}
