import axios from "axios";
import { IArticleAPI, INewAPI } from "types";
import { ISearch } from "types/types";

class SpaceNewsAPI {
  private readonly BASE_URL = process.env.REACT_APP_BASE_URL;
  private readonly ENDPOINTS = {
    articles: "articles",
    blogs: "blogs",
  };
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });
  public async getAllArticles(limit: number) {
    const params = {
      _limit: limit,
    };
    const { data } = await this.API.get<IArticleAPI[]>(this.ENDPOINTS.articles, { params });
    return data;
  }
  public async getAllNews(limit: number) {
    const params = {
      _limit: limit,
    };
    const { data } = await this.API.get<INewAPI[]>(this.ENDPOINTS.blogs);
    return data;
  }
  public async getArticlesById(id: string) {
    const { data } = await this.API.get<IArticleAPI>(`${this.ENDPOINTS.articles}/${id}`);
    return data;
  }

  public async getNewsByID(id: string) {
    const { data } = await this.API.get<INewAPI>(`${this.ENDPOINTS.blogs}/${id}`);
    return data;
  }
  public async getNewsArticlesBySearch(titleWord: string) {
    const params = {
      _titleWord: titleWord,
    };
    const { data } = await this.API.get<IArticleAPI[]>(this.ENDPOINTS.articles, { params });
    return data;
  }
}

export const spaceNewsAPI = new SpaceNewsAPI();
