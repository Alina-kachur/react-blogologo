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
import { fetchSignUp, useAppDispatch, useAppSelector } from "store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IUser } from "types";
import { getFormValidation } from "utils/getValidateRules";
import { FormFieldName } from "config";

export interface IFormValues {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    getValues,
    reset,
  } = useForm<IFormValues>({
    mode: "onBlur",
  });
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormValues> = (userInfo) => {
    const userInfoStorage: IUser = {
      name: userInfo.userName,
      email: userInfo.email,
      isAuth: true,
    };
    dispatch(fetchSignUp(userInfo))
      .unwrap()
      .then(() => {
        localStorage.setItem("userInfo", JSON.stringify(userInfoStorage));
        navigate(ROUTE.HOME);
        reset();
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  };
  console.log();
  return (
    <FormWrapper>
      <BackHomeButton />
      <Title>Sign Up</Title>
      <StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
        <SignUpLabel>Name</SignUpLabel>
        <StyledInput
          type="name"
          placeholder="Your name"
          {...register("userName", getFormValidation(FormFieldName.NAME))}
        />
        {errors.userName && <TextErrors>{errors.userName.message}</TextErrors>}

        <SignUpLabel>Email </SignUpLabel>
        <StyledInput
          type="email"
          placeholder="Your email"
          {...register("email", getFormValidation(FormFieldName.EMAIL))}
        />
        {errors.email && <TextErrors>{errors.email.message}</TextErrors>}

        <SignUpLabel>Password </SignUpLabel>
        <StyledInput
          type="password"
          placeholder="Your password"
          {...register("password", getFormValidation(FormFieldName.PASSWORD))}
        />
        {errors.password && <TextErrors>{errors.password.message}</TextErrors>}

        <SignUpLabel>Password </SignUpLabel>
        <StyledInput
          type="password"
          placeholder="Confirm password"
          {...register("confirmPassword", {
            ...getFormValidation(FormFieldName.CONFIRM_PASSWORD),
            validate: (val: string) => {
              if (watch("password") != val) {
                return "Your passwords do no match";
              }
            },
          })}
        />
        {errors.confirmPassword && <TextErrors>{errors.confirmPassword.message}</TextErrors>}

        <SignUpButton type="submit">Sign Up</SignUpButton>
        <SignUpText>
          Already have an account?
          <SignUpNavLink to={ROUTE.HOME + ROUTE.SIGN_IN}>Sign In</SignUpNavLink>
        </SignUpText>
      </StyledSignUpForm>
    </FormWrapper>
  );
};
