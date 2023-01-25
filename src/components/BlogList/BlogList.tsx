import { BlogListItem } from "components/BlogListItem/BlogListItem";
import { useAppDispatch } from "store";
import { IBlogAPI } from "types";
import { StyledBlogList } from "./styles";

interface IProps {
  list: IBlogAPI[];
}

export const BlogList = ({ list }: IProps) => {
  const dispatch = useAppDispatch();

  return (
    <StyledBlogList>
      {Array.isArray(list) && list.map((blog) => <BlogListItem item={blog} key={blog.id} />)}
    </StyledBlogList>
  );
};
