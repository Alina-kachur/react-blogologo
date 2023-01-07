import styled from "styled-components";
import { Media } from "ui";

const StyledMainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
`;

const WrapperOutlet = styled.div`
  flex-grow: 1;
  display: grid;
  place-self: center;
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
`;
export { StyledMainTemplate, WrapperOutlet };
