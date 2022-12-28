import { BackHomeButton } from "components/BackHomeButton/BackHomeButton";
import { StyledInput } from "components/Input/styles";
import { useForm } from "react-hook-form";
import {
  ForgotText,
  ResetPasswordLink,
  SignInButton,
  SignInLabel,
  StyledSignInForm,
  TitleForm,
} from "./styles";
import { ROUTE } from "router";

interface IFormValues {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>();
  return (
    <>
      <BackHomeButton />
      <TitleForm>Sign In</TitleForm>
      <StyledSignInForm>
        <SignInLabel>Email</SignInLabel>
        <StyledInput
          type="email"
          placeholder="Your email"
          {...register("email", {
            required: "* Email is required",
            maxLength: { value: 25, message: "* max 15 characters" },
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <SignInLabel>Password</SignInLabel>
        <StyledInput
          type="password"
          placeholder="Your password"
          {...register("password", {
            required: "* password is required",
            maxLength: { value: 25, message: "* max 15 characters" },
            minLength: {
              value: 6,
              message: "min 6 characters",
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <ResetPasswordLink to={ROUTE.RESET_PASSWORD}>
          <ForgotText>Forgot password?</ForgotText>
        </ResetPasswordLink>
        <SignInButton>Sign In</SignInButton>
      </StyledSignInForm>
    </>
  );
};
