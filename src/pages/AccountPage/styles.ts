import { SignInButton } from "components/SignInForm/styles";
import { StyledTitle } from "components/Title/styles";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, H2, H3, Media } from "ui";

const WrapperAccountPage = styled(motion.div)`
  display: grid;
  place-items: center;
  padding-top: 50px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  ${Media.XXS} {
    gap: 20px;
  }
`;
const UserName = styled.h2`
  ${H2}
  color:${Color.SECONDARY_TEXT};
  ${Media.XXS} {
    ${H3}
  }
`;
const UserEmail = styled(UserName)`
  ${Media.XXS} {
    ${H3}
  }
`;
const LogOutButton = styled(SignInButton)`
  margin: 0;
`;

export { WrapperAccountPage, UserEmail, UserInfo, UserName, LogOutButton };
