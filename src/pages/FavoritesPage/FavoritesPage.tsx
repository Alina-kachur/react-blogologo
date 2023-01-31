import { BlogListItem, Title } from "components";
import { useAppSelector, getFavorite } from "store";
import { IBlogAPI } from "types";
import { EmptyText, FavoritesList, WrapperFavoritesPage } from "./styles";

export const FavoritesPage = () => {
  const { favorites } = useAppSelector(getFavorite);
  // const dispatch = useAppDispatch();

  // const handleRemove = (article: IBlogAPI) => {
  //   dispatch(removeFavorites(article));
  // };

  return (
    <WrapperFavoritesPage
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Title>Favorites</Title>
      {favorites.length !== 0 ? (
        <FavoritesList>
          {favorites !== null &&
            favorites &&
            favorites.map((result: IBlogAPI) => {
              return <BlogListItem key={result.id} item={result} isFavorite list={favorites} />;
            })}
        </FavoritesList>
      ) : (
        <EmptyText>Empty</EmptyText>
      )}
    </WrapperFavoritesPage>
  );
};
