import { BackHomeButton } from "components/BackHomeButton/BackHomeButton";
import { useState, useCallback } from "react";
import { StyledInput } from "components/Input/styles";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
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
import { useAppDispatch } from "store";
import { useNavigate } from "react-router-dom";
import { fetchSignIn } from "store/slices/userSlice/userSlice";

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
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handleNavigate = () => {
    // navigate(`/${ROUTE.USER_ACCOUNT}`);
  };

  const handleFormErrors: SubmitErrorHandler<IFormValues> = useCallback(() => {
    setModalOpen(true);
  }, []);

  const onSubmit: SubmitHandler<IFormValues> = (userInfo) => {
    dispatch(fetchSignIn(userInfo))
      .then((_) => {
        handleNavigate();
      })
      .finally(() => {
        reset();
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>();
  return (
    <>
      <BackHomeButton />
      <Title>Sign In</Title>
      <StyledSignInForm onSubmit={handleSubmit(onSubmit, handleFormErrors)}>
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
