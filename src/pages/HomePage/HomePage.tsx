import { ArticlesList, CustomSelectDate, NewsList } from "components";
import {
  CustomSelectTitle,
  ISelectOption,
  sortOptions,
} from "components/CustomSelectTitle/CustomSelectTitle";
import { SortByDate } from "components/SortByDate/SortByDate";
import { Tabs } from "components/Tabs/Tabs";
import { Title } from "components/Title/Title";
import { useWindowSize } from "hooks";
import { useState } from "react";
import { useAppDispatch } from "store";
import { SortBlock, WrapperHomePage } from "./styles";

export const HomePage = () => {
  // const [params, setParams] = useState({
  //   sortMode: "asc",
  //   currentPage: 1,
  //   activeTab: "articles",
  //   endpoints: ["articles, blogs"],
  // });
  const [tab, setTab] = useState<"articles" | "blogs">("articles");
  const [page, setPage] = useState<number>(1);

  const { width = 0 } = useWindowSize();

  const [titleSort, setTitleSort] = useState<ISelectOption>(sortOptions[0]);
  const handleTitleSort = (value: ISelectOption | null) => {
    if (value) {
      setTitleSort(value);
    }
  };

  const [sortDate, setSortDate] = useState<string>("Day");

  const dates = ["Day", "Week", "Month", "Year"];
  const [activeDate, setActiveDate] = useState<number>(0);
  const handleActivedate = (index: number) => {
    setActiveDate(index);
  };

  return (
    <WrapperHomePage>
      <Title>Blog</Title>
      <Tabs setActiveTab={setTab} />
      <SortBlock>
        {width > 1024 && (
          <SortByDate selectedDate={activeDate} dates={dates} onClick={handleActivedate} />
        )}
        {width <= 1024 && <CustomSelectDate value={sortDate} onChange={setSortDate} />}
        <CustomSelectTitle options={sortOptions} value={titleSort} onChange={handleTitleSort} />
      </SortBlock>
      {tab === "articles" ? <ArticlesList /> : <NewsList />}
    </WrapperHomePage>
  );
};
