import styled from "styled-components";
import { Color } from "ui";
import { H1, H2, H3 } from "ui/typography";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: ${Color.LIGHT_BACKGROUND};
`;

const TitleNotFound = styled.h1`
  /* ${H1}; */
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  line-height: 80px;
  color: ${Color.PRIMARY};
  font-size: 120px;
  text-align: center;
`;
const SubTitleNotFound = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  text-align: center;
  /* ${H2}; */
  color: ${Color.SECONDARY_TEXT};
`;

const TextNotFound = styled.p`
  /* ${H3}; */
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: ${Color.MEDIUM_TEXT};
  text-align: center;
`;

export { NotFoundContainer, TitleNotFound, SubTitleNotFound, TextNotFound };
