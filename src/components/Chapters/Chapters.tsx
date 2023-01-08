import { useToggle } from "hooks";
import { Dispatch, SetStateAction, useState } from "react";
import { ButtonArticles, ButtonNews, StyledChapters } from "./styles";

interface IProps {
  tabs?: string;
  tab: string;
  setTab: (tab: string) => void;
}

export const Chapters = ({ setTab, tab }: IProps) => {
  const [isActive, setIsActive] = useToggle();

  const handleArticles = () => {
    setTab("articles");
    setIsActive();
  };

  const handleNews = () => {
    setTab("blogs");
    setIsActive();
  };
  return (
    <StyledChapters>
      <ButtonArticles onClick={handleArticles}>Articles</ButtonArticles>
      <ButtonNews onClick={handleNews}>News</ButtonNews>
    </StyledChapters>
  );
};
