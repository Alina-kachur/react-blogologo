import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { B2, Color, S1 } from "ui";

const StyledSignInForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 40px;
  width: clamp(272px, 724px, 100%);
  background-color: ${Color.WHITE_HEADER};
  border-radius: 16px;
`;
const ForgotText = styled.p`
  padding-top: 7px;
  color: ${Color.PRIMARY};
  ${S1};
  :hover {
    text-decoration: underline;
    transition-duration: 0.5s;
  }
`;

const SignInLabel = styled.label`
  padding: 20px 0 10px 0;
  ${B2};
  color: ${Color.SECONDARY_TEXT};
`;
const SignInButton = styled.button`
  margin-top: 50px;
  padding: 16px 0;
  width: 100%;
  ${B2};
  color: ${Color.WHITE};
  background-color: ${Color.PRIMARY};
  border: none;
  border-radius: 5px;

  :hover {
    background-color: ${Color.PRIMARY_LIGHT};
    transition-duration: 0.5s;
  }
`;
const SignInText = styled.p`
  padding-top: 10px;
  text-align: center;
  color: ${Color.SECONDARY_TEXT};
  ${S1};
`;
const SignInNavLink = styled(NavLink)`
  padding-left: 7px;
  ${S1};
  color: ${Color.PRIMARY};
  font-weight: 600;
  :hover {
    color: ${Color.PRIMARY_LIGHT};
    transition-duration: 0.5s;
  }
`;
const TextErrors = styled.p`
  ${S1}
  color: ${Color.ERROR};
`;
const ResetPasswordLink = styled(NavLink)``;

export {
  StyledSignInForm,
  SignInLabel,
  ResetPasswordLink,
  ForgotText,
  SignInButton,
  SignInText,
  SignInNavLink,
  TextErrors,
};
