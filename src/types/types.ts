interface IBlogAPI {
  id: string;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  launches: ILaunch[];
  events: IEvent[];
}

interface ILaunch {
  id: string;
  provider: string;
}
interface IEvent {
  id: string;
  provider: string;
}

interface ISearch extends IBlogAPI {
  titleWord: string;
}
export enum SortTitle {
  AZ = "az",
  ZA = "za",
}
export enum Period {
  DAY = "Day",
  WEEK = "Week",
  MONTH = "Month",
  YEAR = "Year",
}
export type { ISearch, IBlogAPI };
