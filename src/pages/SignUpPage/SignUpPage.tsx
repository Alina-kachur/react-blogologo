import { SignUpForm } from "components";
import { IFormValues } from "components/SignUpForm/SignUpForm";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { fetchSignUp, useAppDispatch } from "store";
import { WrapperPage } from "./styles";

export const SignUpPage = () => {
  return (
    <WrapperPage>
      <SignUpForm />
    </WrapperPage>
  );
};
