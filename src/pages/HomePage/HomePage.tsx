import { BlogList, CustomSelectDate, CustomSelectTitle, Pagination, Tabs, Title } from "components";
import { ISelectOption, sortOptions } from "components/CustomSelectTitle/CustomSelectTitle";
import { TabValue } from "config";
import { useToggle, useWindowSize } from "hooks";
import { useState, useEffect } from "react";
import { fetchArticles, fetchNews, getBlog, useAppDispatch, useAppSelector } from "store";
import {
  NextPageButton,
  PaginationBlok,
  PrevPageButton,
  SortBlock,
  TabsBlock,
  WrapperHomePage,
} from "./styles";

export const HomePage = () => {
  const [isActive, toggleIsActive] = useToggle();
  const [tabValue, setTabValue] = useState<string>(TabValue.ARTICLES_VALUE);

  const { articles, news, error, isLoading } = useAppSelector(getBlog);
  const dispatch = useAppDispatch();

  const [isActivePagination, setIsActivePagination] = useState(true);
  const [paramsPage, setParamsPage] = useState({ page: 0, current: 1 });
  const [titleSort, setTitleSort] = useState<ISelectOption>(sortOptions[0]);
  const [sortDate, setSortDate] = useState<string>("Day");

  const handleActiveTab = (value: string) => {
    setTabValue(value);
    toggleIsActive();
  };

  const handleTitleSort = (value: ISelectOption | null) => {
    if (value) {
      setTitleSort(value);
    }
  };

  const handleNextPage = () => {
    setParamsPage({
      page: paramsPage.page === 14515 ? 14515 : paramsPage.page + 12,
      current: paramsPage.current < 1 ? 1 : paramsPage.current + 1,
    });
    window.scrollTo(0, 0);
  };
  const handlePrevPage = () => {
    setParamsPage({
      page: paramsPage.page === 0 ? 0 : paramsPage.page - 12,
      current: paramsPage.current > 1212 ? 1212 : paramsPage.current - 1,
    });
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    dispatch(fetchArticles({ page: paramsPage.page, titleWord: "", value: "" }));
  }, [dispatch, paramsPage.page]);

  useEffect(() => {
    dispatch(fetchNews({ page: paramsPage.page, titleWord: "", value: "" }));
  }, [dispatch, paramsPage.page]);

  return (
    <WrapperHomePage>
      <Title>Blog</Title>
      <TabsBlock>
        {" "}
        <Tabs
          tabValue={TabValue.ARTICLES_LABEL}
          setActiveTab={() => handleActiveTab(TabValue.ARTICLES_VALUE)}
          isActive={isActive}
        />
        <Tabs
          tabValue={TabValue.NEWS_LABEL}
          setActiveTab={() => handleActiveTab(TabValue.NEWS_VALUE)}
          isActive={!isActive}
        />
      </TabsBlock>

      <SortBlock>
        <CustomSelectDate value={sortDate} onChange={setSortDate} />
        <CustomSelectTitle options={sortOptions} value={titleSort} onChange={handleTitleSort} />
      </SortBlock>
      {tabValue === TabValue.ARTICLES_VALUE ? (
        <BlogList list={articles} />
      ) : (
        <BlogList list={news} />
      )}
      <PaginationBlok>
        {paramsPage.current === 1 ? (
          true
        ) : (
          <PrevPageButton onClick={handlePrevPage}>Prev</PrevPageButton>
        )}
        <Pagination paramsPage={paramsPage.current - 1} isActive={!isActivePagination} />
        <Pagination paramsPage={paramsPage.current} isActive={isActivePagination} />
        <Pagination paramsPage={paramsPage.current + 1} isActive={!isActivePagination} />
        {paramsPage.current === 1212 ? (
          true
        ) : (
          <NextPageButton onClick={handleNextPage}>Next</NextPageButton>
        )}
      </PaginationBlok>
    </WrapperHomePage>
  );
};
