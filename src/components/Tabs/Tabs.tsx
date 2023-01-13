import { useToggle } from "hooks";
import { Dispatch, SetStateAction } from "react";
import { ButtonArticles, ButtonNews, StyledTabs } from "./styles";

interface IProps {
  setActiveTab: Dispatch<SetStateAction<"articles" | "blogs">>;
}
export type setTab = { active: true | false };

export const Tabs = ({ setActiveTab }: IProps) => {
  const [isActive, toggleIsActive] = useToggle();

  return (
    <StyledTabs>
      <ButtonArticles
        active={isActive}
        onClick={() => {
          setActiveTab("articles");
          toggleIsActive();
        }}
      >
        Articles
      </ButtonArticles>
      <ButtonNews
        onClick={() => {
          setActiveTab("blogs");
          toggleIsActive();
        }}
        active={isActive}
      >
        News
      </ButtonNews>
    </StyledTabs>
  );
};
