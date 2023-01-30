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
import { fetchSignIn, useAppDispatch, useAppSelector } from "store";
import { useNavigate } from "react-router-dom";
import { getFormValidation } from "utils/getValidateRules";
import { FormFieldName } from "config";

interface IFormValues {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm<IFormValues>({
    mode: "onBlur",
    defaultValues: {
      email: "",
    },
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
          {...register("email", getFormValidation(FormFieldName.EMAIL))}
        />
        {errors.email && <TextErrors>{errors.email.message}</TextErrors>}
        <SignInLabel>Password</SignInLabel>
        <StyledInput
          type="password"
          placeholder="Your password"
          {...register("password", getFormValidation(FormFieldName.PASSWORD))}
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
