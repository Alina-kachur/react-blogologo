import { generatePath, Link, useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { IBlogAPI } from "types";
import { Info, PublishedDate, StyledBlogListItem, Image } from "./styles";

interface IProps {
  item: IBlogAPI;
}

export const BlogListItem = ({ item }: IProps) => {
  const { imageUrl, publishedAt, title, id } = item;
  const navigate = useNavigate();

  const handleBlog = () => {
    navigate(generatePath(ROUTE.HOME + ROUTE.BLOG_INFO, { id: id }), {
      state: {
        item: item,
      },
    });
  };

  return (
    <StyledBlogListItem onClick={handleBlog}>
      <Link to={""}>
        <Image src={imageUrl} />
        <PublishedDate>{new Date(publishedAt).toLocaleDateString()}</PublishedDate>
        <Info>{title.length > 60 ? title.slice(0, 60) + "..." : title}</Info>
      </Link>
    </StyledBlogListItem>
  );
};
