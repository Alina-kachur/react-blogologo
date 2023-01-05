import { BackHomeButton } from "components/BackHomeButton/BackHomeButton";
import { StyledInput } from "components/Input/styles";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  ForgotText,
  ResetPasswordLink,
  SignInButton,
  SignInLabel,
  SignInNavLink,
  SignInText,
  StyledSignInForm,
  TextErrors,
} from "./styles";
import { ROUTE } from "router";
import { Title } from "components/Title/Title";

interface IFormValues {
  email: string;
  password: string;
}

const onSubmit: SubmitHandler<IFormValues> = ({ email, password }: IFormValues) => {};

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm<IFormValues>();
  return (
    <>
      <BackHomeButton />
      <Title>Sign In</Title>
      <StyledSignInForm onSubmit={handleSubmit(onSubmit)}>
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
        {errors.email && <TextErrors>{errors.email.message}</TextErrors>}
        <SignInLabel>Password</SignInLabel>
        <StyledInput
          type="password"
          placeholder="Your password"
          {...register("password", {
            required: "* Password is required",
            maxLength: { value: 25, message: "* max 15 characters" },
            minLength: {
              value: 6,
              message: "min 6 characters",
            },
          })}
        />
        {errors.password && <TextErrors>{errors.password.message}</TextErrors>}
        <ResetPasswordLink to={"/" + ROUTE.RESET_PASSWORD}>
          <ForgotText>Forgot password?</ForgotText>
        </ResetPasswordLink>
        <SignInButton>Sign In</SignInButton>
        <SignInText>
          Don’t have an account?
          <SignInNavLink to={"/" + ROUTE.SIGN_UP}>Sign Up</SignInNavLink>
        </SignInText>
      </StyledSignInForm>
    </>
  );
};
