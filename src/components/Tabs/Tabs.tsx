import { useToggle } from "hooks";
import { Dispatch, SetStateAction } from "react";
import { ButtonTab, StyledTabs } from "./styles";

interface IProps {
  tabValue: string;
  setActiveTab: () => void;
  isActive: boolean;
}

export const Tabs = ({ tabValue, setActiveTab, isActive }: IProps) => {
  return (
    <StyledTabs>
      <ButtonTab onClick={setActiveTab} $isActive={isActive}>
        {tabValue}
      </ButtonTab>
    </StyledTabs>
  );
};
