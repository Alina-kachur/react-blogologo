import { memo } from "react";
import { ButtonTab, StyledTabs } from "./styles";

interface IProps {
  tabValue: string;
  setActiveTab: () => void;
  isActive: boolean;
}

export const Tabs = memo(({ tabValue, setActiveTab, isActive }: IProps) => {
  return (
    <StyledTabs>
      <ButtonTab onClick={setActiveTab} $isActive={isActive}>
        {tabValue}
      </ButtonTab>
    </StyledTabs>
  );
});
