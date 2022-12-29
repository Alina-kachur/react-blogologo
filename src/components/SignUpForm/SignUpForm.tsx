import { BackHomeButton } from "components/BackHomeButton/BackHomeButton";
import { StyledInput } from "components/Search/styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { ROUTE } from "router";
import {
  SignUpButton,
  SignUpLabel,
  SignUpNavLink,
  SignUpText,
  StyledSignUpForm,
  TextErrors,
  TitleForm,
} from "./styles";

interface IFormValues {
  email: string;
  password: string;
  name: string;
}

const onSubmit: SubmitHandler<IFormValues> = ({ email, password, name }: IFormValues) => {};
export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm<IFormValues>();
  return (
    <>
      <BackHomeButton />
      <TitleForm>Sign Up</TitleForm>
      <StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
        <SignUpLabel>Name</SignUpLabel>
        <StyledInput
          type="text"
          placeholder="Your name"
          {...register("name", {
            required: "* Name is required",
            maxLength: { value: 25, message: "* max 15 characters" },
          })}
        />
        {errors.name && <TextErrors>{errors.name.message}</TextErrors>}
        <SignUpLabel>Email</SignUpLabel>
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
        <SignUpLabel>Password</SignUpLabel>
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
        <SignUpButton>Sign Up</SignUpButton>
        <SignUpText>
          Already a member?
          <SignUpNavLink to={"../" + ROUTE.SIGN_IN}>Sign In</SignUpNavLink>
        </SignUpText>
      </StyledSignUpForm>
    </>
  );
};
