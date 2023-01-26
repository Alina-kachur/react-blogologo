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
import { useAppDispatch } from "store";
import { useNavigate } from "react-router-dom";

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
  name: string;
  surname: string;
  email: string;
  password: string;
}
interface IProps {
  handleRegisterUser: (userData: IFormValues) => void;
}

export const SignUpForm = ({ handleRegisterUser }: IProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>({
    mode: "onChange",
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },
  });

  // const onSubmit: SubmitHandler<IFormValues> = ({ email, password }: IFormValues) => {
  //   const auth = getAuth();
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       console.log(userCredential);
  //       navigate(ROUTE.HOME);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //     });
  //   reset();
  // };
  return (
    <>
      <BackHomeButton />
      <Title>Sign Up</Title>
      <StyledSignUpForm onSubmit={handleSubmit(handleRegisterUser)}>
        <SignUpLabel>Name</SignUpLabel>
        <StyledInput
          type="name"
          placeholder="Your name"
          {...register("name", validateRules.name)}
        />
        {errors.name && <TextErrors>{errors.name.message}</TextErrors>}
        <SignUpLabel>Surname</SignUpLabel>
        <StyledInput
          type="surname"
          placeholder="Your surname"
          {...register("surname", validateRules.surname)}
        />
        {errors.surname && <TextErrors>{errors.surname.message}</TextErrors>}
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
    </>
  );
};
