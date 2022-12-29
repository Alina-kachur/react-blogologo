import { SignInButton, SignInLabel, SignInNavLink, SignInText } from "components/SignInForm/styles";
import styled from "styled-components";
import { Color, H1, S1 } from "ui";

const StyledSignUpForm = styled.form`
  width: clamp(272px, 724px, 100%);
  background-color: ${Color.WHITE_HEADER};
  border-radius: 16px;
  padding: 40px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin: 0 auto;
`;

const SignUpButton = styled(SignInButton)``;
const SignUpLabel = styled(SignInLabel)``;
const SignUpText = styled(SignInText)``;
const SignUpNavLink = styled(SignInNavLink)``;
const TextErrors = styled.p`
  color: ${Color.ERROR};
  ${S1}
`;
const TitleForm = styled.h1`
  /* ${H1}; */
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;
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
