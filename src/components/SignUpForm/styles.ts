import {
  SignInButton,
  SignInLabel,
  SignInNavLink,
  SignInText,
  StyledSignInForm,
} from "components/SignInForm/styles";
import styled from "styled-components";
import { Color, S1 } from "ui";

const FormWrapper = styled.div``;

const StyledSignUpForm = styled(StyledSignInForm)``;
const SignUpButton = styled(SignInButton)``;
const SignUpLabel = styled(SignInLabel)``;
const SignUpText = styled(SignInText)``;
const SignUpNavLink = styled(SignInNavLink)`
  padding-left: 7px;
`;
const TextErrors = styled.p`
  color: ${Color.ERROR};
  ${S1}
`;
export {
  StyledSignUpForm,
  SignUpLabel,
  SignUpButton,
  SignUpText,
  SignUpNavLink,
  TextErrors,
  FormWrapper,
};
