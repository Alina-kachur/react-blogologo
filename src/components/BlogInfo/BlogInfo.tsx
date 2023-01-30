import { Title } from "components/Title/Title";
import { useNavigate } from "react-router-dom";
import { IBlogAPI } from "types";
import {
  Home,
  Navigate,
  Post,
  StyledBlogInfo,
  Image,
  Info,
  SourceBlock,
  SourceLink,
  Favorites,
} from "./styles";
import { memo } from "react";
import { ROUTE } from "router";
import { getUserInfo, useAppSelector, getFavorite } from "store";
import { HeartIcon } from "assets";

interface IProps {
  item: IBlogAPI;
  onClick: (item: IBlogAPI) => void;
}

export const BlogInfo = memo(({ item, onClick }: IProps) => {
  const { title, imageUrl, url, summary, id } = item;
  const { isAuth } = useAppSelector(getUserInfo);
  const { favorites } = useAppSelector(getFavorite);
  const isFavorites = favorites.map((favorite) => favorite.id).some((favorite) => favorite === id);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(ROUTE.HOME);
  };

  const handleChangeFavorites = () => {
    onClick(item);
  };

  return (
    <StyledBlogInfo>
      <Navigate>
        <Home onClick={handleBack}>Home /</Home>
        <Post>{id} Post</Post>
      </Navigate>
      <Title>{title}</Title>
      <Image src={imageUrl} alt="image" />
      <Info>{summary}</Info>
      <SourceBlock>
        <SourceLink href={url} target="_blank">
          Read more{" "}
        </SourceLink>
        {isAuth && isFavorites ? (
          <Favorites onClick={handleChangeFavorites}>
            <HeartIcon height="30" width="30" fill="red" />
          </Favorites>
        ) : (
          <Favorites onClick={handleChangeFavorites}>
            <HeartIcon height="30" width="30" />
          </Favorites>
        )}
      </SourceBlock>
    </StyledBlogInfo>
  );
});
