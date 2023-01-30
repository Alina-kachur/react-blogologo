import { BlogListItem } from "components/BlogListItem/BlogListItem";
import { addToFavorites, useAppDispatch } from "store";
import { IBlogAPI } from "types";
import { StyledBlogList } from "./styles";
import { memo } from "react";

interface IProps {
  list: IBlogAPI[];
}

export const BlogList = memo(({ list }: IProps) => {
  const dispatch = useAppDispatch();
  const handleAddFav = (article: IBlogAPI) => {
    dispatch(addToFavorites(article));
  };

  return (
    <StyledBlogList>
      {Array.isArray(list) &&
        list.map((blog) => (
          <BlogListItem onClick={handleAddFav} item={blog} key={blog.id} list={list} />
        ))}
    </StyledBlogList>
  );
});
