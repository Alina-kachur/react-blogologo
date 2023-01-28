import { SignUpForm } from "components";
import { IFormValues } from "components/SignUpForm/SignUpForm";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { fetchSignUp, useAppDispatch } from "store";
import { WrapperPage } from "./styles";

export const SignUpPage = () => {
  return (
    <WrapperPage
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <SignUpForm />
    </WrapperPage>
  );
};
