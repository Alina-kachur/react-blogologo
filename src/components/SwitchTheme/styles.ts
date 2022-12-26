import styled from "styled-components";
import { Color } from "ui";
import { Typography } from "ui/typography";

const StyledSwitchTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
`;
const StyledText = styled.p``;

const SwitchThemeButton = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${Color.SWITCH_THEME_BUTTON};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }

  span:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${Color.WHITE};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + span {
    background-color: ${Color.PRIMARY_LIGHT};
  }

  input:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;
export { SwitchThemeButton, StyledSwitchTheme, StyledText };
