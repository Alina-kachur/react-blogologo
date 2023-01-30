import { BlogInfo, Slider, Spinner } from "components";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  addToFavorites,
  fetchArticleById,
  fetchArticles,
  getArticlesById,
  useAppDispatch,
  useAppSelector,
} from "store";
import { IBlogAPI } from "types";
import { RecommendationsTitle, WrapperBlogInfoPage } from "./styles";

export const BlogInfoPage = () => {
  const { id = "" } = useParams();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { isLoading, error } = useAppSelector(getArticlesById);

  const handleAddToFavorites = (article: IBlogAPI) => {
    dispatch(addToFavorites(article));
  };

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchArticles({ page: 0, titleWord: "", value: "" }));
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <WrapperBlogInfoPage
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <BlogInfo item={location.state.item} onClick={handleAddToFavorites} />
      <RecommendationsTitle>Recommendations</RecommendationsTitle>
      <Slider />
    </WrapperBlogInfoPage>
  );
};
