import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Color, Typography } from "ui";

const StyledSignInForm = styled.form`
  min-height: 472px;
  min-width: 624px;
  background-color: ${Color.WHITE_HEADER};
  border-radius: 16px;
  padding: 40px;
  display: flex;
  flex-direction: column;
`;
const ForgotText = styled.p`
  color: ${Color.SECONDARY_TEXT};
  ${Typography.S1};
  padding-top: 7px;
  :hover {
    text-decoration: underline;
  }
`;

const SignInLabel = styled.label`
  ${Typography.B2};
  color: ${Color.SECONDARY_TEXT};
  margin-top: 20px;
`;
const SignInButton = styled.button`
  ${Typography.B2};
  color: ${Color.WHITE};
  background-color: ${Color.PRIMARY};
  border: none;
  padding: 16px 0;
  width: 100%;
  border-radius: 5px;
  margin-top: 50px;
  :hover {
    background-color: ${Color.PRIMARY_LIGHT};
  }
`;

const TitleForm = styled.h1`
  ${Typography.H1};
  color: ${Color.SECONDARY_TEXT};
`;

const ResetPasswordLink = styled(NavLink)``;

export { StyledSignInForm, TitleForm, SignInLabel, ResetPasswordLink, ForgotText, SignInButton };
