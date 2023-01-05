import { BackHomeButton } from "components/BackHomeButton/BackHomeButton";
import { StyledInput } from "components/Search/styles";
import { TextErrors } from "components/SignInForm/styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { ResetPasswordLabel, StyledResetPassword, SubmitButton, SubTitle } from "./styles";
import { Title } from "components/Title/Title";
interface IFormValues {
  email: string;
}

const onSubmit: SubmitHandler<IFormValues> = ({ email }: IFormValues) => {};

export const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>();
  return (
    <>
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
        <SubmitButton>Submit</SubmitButton>
      </StyledResetPassword>
    </>
  );
};
