// import { Title } from "components";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { spaceNewsAPI } from "services";
// import { useAppDispatch, useAppSelector } from "store";
// import { getNewsArticlesBySearch } from "store/selectors/searchSelector";
// import { fetchArticlesBySearch } from "store/slices/articlesSlice/articlesSlice";
// import { IArticleAPI } from "types/types";
// import { WrapperSearchPage } from "./styles";

// export const SearchPage = () => {
//   const { search } = useAppSelector(getNewsArticlesBySearch);
//   const dispatch = useAppDispatch();
//   useEffect(() => {
//     search.title && dispatch(fetchArticlesBySearch(search.title));
//   }, [dispatch, search]);
//   return (
//     <WrapperSearchPage>
//       <Title>Search results "{search.title ? search.title : ""}"</Title>
//     </WrapperSearchPage>
//   );
// };
