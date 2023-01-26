import { Title } from "components/Title/Title";
import { useNavigate } from "react-router-dom";
import { IBlogAPI } from "types";
import {
  Home,
  Navigate,
  Post,
  StyledBlogInfo,
  Image,
  Info,
  SourceBlock,
  SourceLink,
} from "./styles";

interface IProps {
  item: IBlogAPI;
}

export const BlogInfo = ({ item }: IProps) => {
  const { title, imageUrl, url, summary, id } = item;

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <StyledBlogInfo>
      <Navigate>
        <Home onClick={handleBack}>Home /</Home>
        <Post>{id} Post</Post>
      </Navigate>
      <Title>{title}</Title>
      <Image src={imageUrl} />
      <Info>{summary}</Info>
      <SourceBlock>
        <SourceLink href={url} target="_blank">
          Read more{" "}
        </SourceLink>
      </SourceBlock>
    </StyledBlogInfo>
  );
};
