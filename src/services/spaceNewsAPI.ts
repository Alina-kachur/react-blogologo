import axios from "axios";
import { IBlogAPI } from "types";

class SpaceNewsAPI {
  private readonly BASE_URL = process.env.REACT_APP_BASE_URL;
  private readonly ENDPOINTS = {
    articles: "articles",
    blogs: "blogs",
  };
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });
  public async getBlog(page: number, titleWord: string, value: string, endpoint: string) {
    const params = {
      _limit: 12,
      _start: page,
      _title_contains: titleWord,
      _sort: value,
    };
    const { data } = await this.API.get<IBlogAPI[]>("/" + endpoint, { params });
    return data;
  }

  public async getArticlesById(id: string) {
    const { data } = await this.API.get<IBlogAPI>(`${this.ENDPOINTS.articles}/${id}`);
    return data;
  }

  public async getNewsById(id: string) {
    const { data } = await this.API.get<IBlogAPI>(`${this.ENDPOINTS.blogs}/${id}`);
    return data;
  }
}

export const spaceNewsAPI = new SpaceNewsAPI();
