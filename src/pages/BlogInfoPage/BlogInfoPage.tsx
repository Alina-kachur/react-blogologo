import { BlogInfo, Slider, Spinner } from "components";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { fetchArticleById, getArticlesById, useAppDispatch, useAppSelector } from "store";
import { WrapperBlogInfoPage } from "./styles";

export const BlogInfoPage = () => {
  const { id = "" } = useParams();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { isLoading, error } = useAppSelector(getArticlesById);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <WrapperBlogInfoPage>
      <BlogInfo item={location.state.item} />
      <Slider />
    </WrapperBlogInfoPage>
  );
};
