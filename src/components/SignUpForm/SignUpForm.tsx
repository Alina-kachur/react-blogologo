import { BackHomeButton } from "components/BackHomeButton/BackHomeButton";
import { StyledInput } from "components/Search/styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { ROUTE } from "router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  FormWrapper,
  SignUpButton,
  SignUpLabel,
  SignUpNavLink,
  SignUpText,
  StyledSignUpForm,
  TextErrors,
} from "./styles";
import { Title } from "components/Title/Title";
import { fetchSignUp, getUserInfo, useAppDispatch, useAppSelector } from "store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IUser } from "types";

const validateRules = {
  name: {
    required: "* Name is required",
    maxLength: { value: 25, message: "* max 15 characters" },
    pattern: {
      value: /^[аa-яzАA-ЯZ\s]*$/,
      message: "Only letters",
    },
  },
  surname: {
    required: "* Surname is required",
    maxLength: { value: 25, message: "* max 15 characters" },
    pattern: {
      value: /^[аa-яzАA-ЯZ\s]*$/,
      message: "* Only letters",
    },
  },
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
      message: "* min 6 characters",
    },
  },
};

export interface IFormValues {
  userName: string;
  email: string;
  password: string;
}

export const SignUpForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isLoading } = useAppSelector(getUserInfo);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    getValues,
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (userInfo) => {
    const userInfoToSave: IUser = {
      name: userInfo.userName,
      email: userInfo.email,
      isAuth: true,
    };
    dispatch(fetchSignUp(userInfo))
      .unwrap()
      .then(() => {
        localStorage.setItem("userInfo", JSON.stringify(userInfoToSave));
        navigate(ROUTE.HOME + ROUTE.USER_ACCOUNT);
        reset();
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  };
  return (
    <FormWrapper>
      <BackHomeButton />
      <Title>Sign Up</Title>
      <StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
        <SignUpLabel>Name</SignUpLabel>
        <StyledInput
          type="name"
          placeholder="Your name"
          {...register("userName", validateRules.name)}
        />
        {errors.userName && <TextErrors>{errors.userName.message}</TextErrors>}
        <SignUpLabel>Email</SignUpLabel>
        <StyledInput
          type="email"
          placeholder="Your email"
          {...register("email", validateRules.email)}
        />
        {errors.email && <TextErrors>{errors.email.message}</TextErrors>}
        <SignUpLabel>Password</SignUpLabel>
        <StyledInput
          type="password"
          placeholder="Your password"
          {...register("password", validateRules.email)}
        />
        {errors.password && <TextErrors>{errors.password.message}</TextErrors>}
        <SignUpButton type="submit">Sign Up</SignUpButton>
        <SignUpText>
          Already have an account?
          <SignUpNavLink to={ROUTE.HOME + ROUTE.SIGN_IN}>Sign In</SignUpNavLink>
        </SignUpText>
      </StyledSignUpForm>
    </FormWrapper>
  );
};
