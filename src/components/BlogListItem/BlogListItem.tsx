import { generatePath, Link, useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { IBlogAPI } from "types";
import { Info, PublishedDate, StyledBlogListItem, Image } from "./styles";
import { memo } from "react";

interface IProps {
  item: IBlogAPI;
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const BlogListItem = memo(({ item }: IProps) => {
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
    <StyledBlogListItem
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleBlog}
    >
      <Link to={""}>
        <Image src={imageUrl} alt="image" />
        <PublishedDate>{new Date(publishedAt).toLocaleDateString()}</PublishedDate>
        <Info>{title.length > 60 ? title.slice(0, 60) + "..." : title}</Info>
      </Link>
    </StyledBlogListItem>
  );
});
