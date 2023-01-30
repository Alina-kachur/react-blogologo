import { SignInButton } from "components/SignInForm/styles";
import styled from "styled-components";
import { Color, H3, Media } from "ui";

const WrapperModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: grid;
  place-items: center;
  padding: 2rem;
  background-color: transparent;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  place-self: center;
  padding: 30px;
  width: 400px;
  height: 200px;
  border-radius: 5px;
  text-align: center;
  background: ${Color.GRAY};
  border: 1px solid ${Color.PRIMARY};
  ${Media.XS} {
    width: 300px;
  }
  ${Media.XXS} {
    width: 250px;
  }
`;
const ModalText = styled.div`
  ${H3};
  color: ${Color.PRIMARY};
`;
const Button = styled(SignInButton)``;

export { WrapperModal, ModalInfo, ModalText, Button };
