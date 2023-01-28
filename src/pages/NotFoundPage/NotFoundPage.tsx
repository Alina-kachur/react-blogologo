import { BackHomeButton } from "components";
import { NotFoundContainer, SubTitleNotFound, TextNotFound, TitleNotFound } from "./styles";

export const NotFoundPage = () => {
  return (
    <NotFoundContainer
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <TitleNotFound>404</TitleNotFound>
      <SubTitleNotFound>OOPS!PAGE NOT FOUND</SubTitleNotFound>
      <TextNotFound>Sorry, the page you're looking for doesn't exist.</TextNotFound>
      <BackHomeButton />
    </NotFoundContainer>
  );
};
