import styled from "styled-components";
import { Color, H2, H3 } from "ui";

const WrapperBlogInfoPage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

const RecommendationsTitle = styled.h2`
  text-align: center;
  ${H2}
  color: ${Color.SECONDARY_TEXT};
`;

export { WrapperBlogInfoPage, RecommendationsTitle };
