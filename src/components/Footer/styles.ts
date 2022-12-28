import styled from "styled-components";
import { Color, Media, Typography } from "ui";

const StyledFooter = styled.footer`
  display: flex;
  padding: 34px 0;
  width: 68%;
  justify-content: space-between;
  align-items: center;
  border-top: 1.5px solid ${Color.LIGHT};
  background-color: ${Color.LIGHT_BACKGROUND};

  /* ${Media.LG} {
    width: 80%;
  }

  ${Media.MD} {
    width: 90%;
  }

  ${Media.SM} {
    width: 90%;
  } */
  /* ${Media.XS} {
    width: 90%;
    flex-direction: column;
    gap: 15px;
  } */
`;
const CopyRight = styled.p`
  ${Typography.B2};
  color: ${Color.MEDIUM_TEXT};
`;

export { StyledFooter, CopyRight };
