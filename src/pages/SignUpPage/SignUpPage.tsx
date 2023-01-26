import { SignUpForm } from "components";
import { IFormValues } from "components/SignUpForm/SignUpForm";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { fetchSignUp, useAppDispatch } from "store";
import { WrapperPage } from "./styles";

export const SignUpPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleRegisterUser = (userData: IFormValues) => {
    dispatch(
      fetchSignUp({
        userName: userData.name,
        userSurname: userData.surname,
        email: userData.email,
        password: userData.password,
      }),
    )
      .unwrap()
      .then(() => navigate(ROUTE.HOME))
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <WrapperPage>
      <SignUpForm handleRegisterUser={handleRegisterUser} />
    </WrapperPage>
  );
};
