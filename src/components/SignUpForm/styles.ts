import { SignInButton, SignInLabel, SignInNavLink, SignInText } from "components/SignInForm/styles";
import styled from "styled-components";
import { Color, S1 } from "ui";

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
export { StyledSignUpForm, SignUpLabel, SignUpButton, SignUpText, SignUpNavLink, TextErrors };
