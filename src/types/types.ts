interface IArticleAPI {
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
interface IArticle {
  id: string;
  title: string;
  imageUrl: string;
  publishedAt: string;
}
interface INewAPI {
  id: string;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  launches?: ILaunch[];
  events?: IEvent[];
}
interface INew {
  id: string;
  title: string;
  imageUrl: string;
  publishedAt: string;
}
interface ISearch extends INewAPI {
  titleWord: string;
}
export type { IArticleAPI, INewAPI, IArticle, INew, ISearch };
