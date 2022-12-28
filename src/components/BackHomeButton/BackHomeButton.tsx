import { ROUTE } from "router";
import { Link, StyledBackHomeButton } from "./styles";

export const BackHomeButton = () => {
  return (
    <Link to={ROUTE.HOME}>
      <StyledBackHomeButton>Back to home</StyledBackHomeButton>
    </Link>
  );
};
