import { BackHomeButton } from "components";
import { NotFoundContainer, SubTitleNotFound, TextNotFound, TitleNotFound } from "./styles";

export const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <TitleNotFound>404</TitleNotFound>
      <SubTitleNotFound>OOPS!PAGE NOT FOUND</SubTitleNotFound>
      <TextNotFound>Sorry, the page you're looking for doesn't exist.</TextNotFound>
      <BackHomeButton />
    </NotFoundContainer>
  );
};
