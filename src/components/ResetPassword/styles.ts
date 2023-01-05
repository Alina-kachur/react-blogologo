import { SignInButton, SignInLabel } from "components/SignInForm/styles";
import styled from "styled-components";
import { Color, H2, H3 } from "ui";

const StyledResetPassword = styled.form`
  width: clamp(272px, 724px, 100%);
  background-color: ${Color.WHITE_HEADER};
  border-radius: 16px;
  padding: 40px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin: 0 auto;
`;
const ResetPasswordLabel = styled(SignInLabel)``;
const SubmitButton = styled(SignInButton)``;
const SubTitle = styled.h3`
  ${H3};
  color: ${Color.MEDIUM_TEXT};
  text-align: center;
  /* font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px; */
`;

export { StyledResetPassword, ResetPasswordLabel, SubmitButton, SubTitle };
