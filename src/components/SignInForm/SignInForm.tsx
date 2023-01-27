import { BackHomeButton } from "components/BackHomeButton/BackHomeButton";
import { useState } from "react";
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
import { fetchSignIn, getUserInfo, useAppDispatch, useAppSelector } from "store";
import { useNavigate } from "react-router-dom";

interface IFormValues {
  email: string;
  password: string;
}
const validateRules = {
  email: {
    required: "* Email is required",
    maxLength: { value: 25, message: "* max 15 characters" },
    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
  },
  password: {
    required: "* Password is required",
    maxLength: { value: 25, message: "* max 15 characters" },
    minLength: {
      value: 6,
      message: "min 6 characters",
    },
  },
};

export const SignInForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading } = useAppSelector(getUserInfo);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>();

  const userInfoToSave = JSON.parse(localStorage.getItem("userInfo")!);
  if (userInfoToSave) {
    userInfoToSave.isAuth = true;
  }

  const onSubmit: SubmitHandler<IFormValues> = (userInfo) => {
    setErrorMessage(null);
    dispatch(fetchSignIn(userInfo))
      .unwrap()
      .then(() => {
        localStorage.length > 0 && localStorage.setItem("userInfo", JSON.stringify(userInfoToSave));
        navigate(`${ROUTE.HOME}`);
      })
      .catch((error) => {
        setErrorMessage(error);
        reset();
      });
  };

  return (
    <>
      <BackHomeButton />
      <Title>Sign In</Title>
      <StyledSignInForm onSubmit={handleSubmit(onSubmit)}>
        <SignInLabel>Email</SignInLabel>
        <StyledInput
          type="email"
          placeholder="Your email"
          {...register("email", validateRules.email)}
        />
        {errors.email && <TextErrors>{errors.email.message}</TextErrors>}
        <SignInLabel>Password</SignInLabel>
        <StyledInput
          type="password"
          placeholder="Your password"
          {...register("password", validateRules.password)}
        />
        {errors.password && <TextErrors>{errors.password.message}</TextErrors>}
        <ResetPasswordLink to={ROUTE.HOME + ROUTE.RESET_PASSWORD}>
          <ForgotText>Forgot password?</ForgotText>
        </ResetPasswordLink>
        <SignInButton type="submit">Sign In</SignInButton>
        <SignInText>
          Don’t have an account?
          <SignInNavLink to={ROUTE.HOME + ROUTE.SIGN_UP}>Sign Up</SignInNavLink>
        </SignInText>
      </StyledSignInForm>
    </>
  );
};
