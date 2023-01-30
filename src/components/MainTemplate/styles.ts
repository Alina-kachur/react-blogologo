import styled from "styled-components";
import { Media } from "ui";

const StyledMainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const WrapperOutlet = styled.div`
  display: inline-block;
  min-height: 100vh;
  place-self: center;
  padding-bottom: 50px;
  width: 63%;
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
    width: 90%;
  }
  ${Media.SM} {
    width: 75%;
  }
  ${Media.XS} {
    width: 85%;
  }
  ${Media.XXS} {
    width: 90%;
  }
`;
export { StyledMainTemplate, WrapperOutlet };
