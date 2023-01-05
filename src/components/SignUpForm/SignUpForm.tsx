import { BackHomeButton } from "components/BackHomeButton/BackHomeButton";
import { StyledInput } from "components/Search/styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { ROUTE } from "router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  SignUpButton,
  SignUpLabel,
  SignUpNavLink,
  SignUpText,
  StyledSignUpForm,
  TextErrors,
} from "./styles";
import { Title } from "components/Title/Title";
import { setUser } from "store/slices/userSlice/userSlice";
import { useAppDispatch } from "store";

interface IFormValues {
  email: string;
  password: string;
}

export const SignUpForm = () => {
  // const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = ({ email, password }: IFormValues) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        // dispatch(
        //   setUser({
        //     email: user.email,
        //     id: user.uid,
        //   }),
        // );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    reset();
  };
  return (
    <div>
      <BackHomeButton />
      <Title>Sign Up</Title>
      <StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
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
    </div>
  );
};
