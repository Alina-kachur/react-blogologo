import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { B2, Color, H1, S1 } from "ui";

const StyledSignUpForm = styled.form`
  width: clamp(272px, 724px, 100%);
  background-color: ${Color.WHITE_HEADER};
  border-radius: 16px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const SignUpLabel = styled.label`
  ${B2};
  color: ${Color.SECONDARY_TEXT};
  margin-top: 20px;
`;
const SignUpButton = styled.button`
  ${B2};
  color: ${Color.WHITE};
  background-color: ${Color.PRIMARY};
  border: none;
  padding: 16px 0;
  width: 100%;
  border-radius: 5px;
  margin-top: 50px;
  :hover {
    background-color: ${Color.PRIMARY_LIGHT};
    transition-duration: 0.5s;
  }
`;
const SignUpText = styled.p`
  color: ${Color.SECONDARY_TEXT};
  ${S1};
  padding-top: 10px;
  text-align: center;
`;
const SignUpNavLink = styled(NavLink)`
  ${S1};
  color: ${Color.PRIMARY};
  font-weight: 600;
  :hover {
    color: ${Color.PRIMARY_LIGHT};
    transition-duration: 0.5s;
  }
`;
const TextErrors = styled.p`
  color: ${Color.ERROR};
  ${S1}
`;
const TitleForm = styled.h1`
  ${H1};
  color: ${Color.SECONDARY_TEXT};
  padding-bottom: 20px;
`;

export {
  StyledSignUpForm,
  TitleForm,
  SignUpLabel,
  SignUpButton,
  SignUpText,
  SignUpNavLink,
  TextErrors,
};
