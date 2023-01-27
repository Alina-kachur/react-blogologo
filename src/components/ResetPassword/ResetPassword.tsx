import { StyledInput } from "components/Search/styles";
import { TextErrors } from "components/SignInForm/styles";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  ResetPasswordLabel,
  StyledResetPassword,
  SubmitButton,
  SubTitle,
  WrapperForm,
} from "./styles";
import { Title } from "components/Title/Title";
import { BackHomeButton } from "components/BackHomeButton/BackHomeButton";
import { memo, useState } from "react";
import { fetchResetPassword, getUserInfo, useAppDispatch, useAppSelector } from "store";
interface IFormValues {
  email: string;
}

export const ResetPassword = () => {
  const [isMessage, setIsMessage] = useState(false);
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(getUserInfo);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm<IFormValues>();

  const email = getValues("email");

  const onSubmit: SubmitHandler<IFormValues> = (email) => {
    dispatch(fetchResetPassword(email))
      .then(() => {
        setIsMessage((isMessage) => !isMessage);
      })
      .catch(() => {
        alert("ERROR");
        reset();
      });
  };

  return (
    <WrapperForm>
      <BackHomeButton />
      <Title>Reset Password</Title>
      <StyledResetPassword onSubmit={handleSubmit(onSubmit)}>
        <SubTitle>
          Please enter your email address and we'll send you instructions on how to reset your
          password
        </SubTitle>
        <ResetPasswordLabel>Email</ResetPasswordLabel>
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
        <SubmitButton type="submit">Reset</SubmitButton>
      </StyledResetPassword>
    </WrapperForm>
  );
};
