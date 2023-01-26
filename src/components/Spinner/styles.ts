import styled from "styled-components";
import { Color } from "ui";

const SpinnerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  width: 300px;
  height: 300px;
  background-color: transparent;
`;
const SircleBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: rgb(63, 249, 220);
  background: linear-gradient(0deg, rgba(108, 27, 219, 0.1) 33%, rgba(108, 27, 219, 1) 100%);
  animation: spin 0.8s linear 0s infinite;
  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
const SircleCore = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Color.LIGHT_BACKGROUND};
  border-radius: 50%;
`;
export { SpinnerBox, SircleBorder, SircleCore };
