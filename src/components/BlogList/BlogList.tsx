import { BlogListItem } from "components/BlogListItem/BlogListItem";
import { useAppDispatch } from "store";
import { IBlogAPI } from "types";
import { StyledBlogList } from "./styles";
import { memo } from "react";

interface IProps {
  list: IBlogAPI[];
}

export const BlogList = memo(({ list }: IProps) => {
  const dispatch = useAppDispatch();

  return (
    <StyledBlogList>
      {Array.isArray(list) && list.map((blog) => <BlogListItem item={blog} key={blog.id} />)}
    </StyledBlogList>
  );
});
