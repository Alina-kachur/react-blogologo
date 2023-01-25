import { CustomSelectDate } from "components";
import { BlogList } from "components/BlogList/BlogList";
import {
  CustomSelectTitle,
  ISelectOption,
  sortOptions,
} from "components/CustomSelectTitle/CustomSelectTitle";
import { Tabs } from "components/Tabs/Tabs";
import { Title } from "components/Title/Title";
import { TabValue } from "config/tabValue";
import { useToggle, useWindowSize } from "hooks";
import { useState, useEffect } from "react";
import { fetchArticles, fetchNews, useAppDispatch, useAppSelector } from "store";
import { getBlog } from "store/selectors/blogSelector";
import { SortBlock, TabsBlock, WrapperHomePage } from "./styles";

export const HomePage = () => {
  const [isActive, toggleIsActive] = useToggle();
  const [tabValue, setTabValue] = useState<string>(TabValue.ARTICLES_VALUE);

  const { articles, news, error, isLoading } = useAppSelector(getBlog);
  const dispatch = useAppDispatch();

  const [page, setPage] = useState<number>(1);

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

  useEffect(() => {
    dispatch(fetchArticles({ page: 1, titleWord: "", value: "" }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchNews({ page: 1, titleWord: "", value: "" }));
  }, [dispatch]);

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
    </WrapperHomePage>
  );
};
