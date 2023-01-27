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

interface ISelectOption {
  value: string;
  label: string;
}
interface IUser {
  name: string;
  email: string;
  isAuth: boolean;
}
export type { ISearch, IBlogAPI, ISelectOption, IUser };
