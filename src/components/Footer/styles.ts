import styled from "styled-components";
import { Color, Media, S1 } from "ui";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 34px 0;
  width: 68%;
  border-top: 1.5px solid ${Color.LIGHT};
  background-color: ${Color.LIGHT_BACKGROUND};
  ${Media.XXL} {
    width: 80%;
  }
  ${Media.XL} {
    width: 90%;
  }
  ${Media.LG} {
    width: 75%;
  }
  ${Media.MD} {
    width: 85%;
  }
  ${Media.SM} {
    width: 85%;
  }
  ${Media.XS} {
    flex-direction: column;
    gap: 15px;
    width: 90%;
  } ;
`;
const CopyRight = styled.p`
  ${S1};
  color: ${Color.MEDIUM_TEXT};
`;

export { StyledFooter, CopyRight };
