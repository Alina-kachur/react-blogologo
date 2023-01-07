import { SignInButton, SignInLabel, StyledSignInForm } from "components/SignInForm/styles";
import styled from "styled-components";
import { Color, H2, H3 } from "ui";

const StyledResetPassword = styled(StyledSignInForm)``;
const ResetPasswordLabel = styled(SignInLabel)`
  padding-bottom: 10px;
`;
const SubmitButton = styled(SignInButton)``;
const SubTitle = styled.h3`
  text-align: center;
  ${H3};
  color: ${Color.MEDIUM_TEXT};
`;

export { StyledResetPassword, ResetPasswordLabel, SubmitButton, SubTitle };
