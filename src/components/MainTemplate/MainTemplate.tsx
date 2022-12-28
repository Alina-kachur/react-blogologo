import { Footer } from "components/Footer/Footer";
import { Header } from "components/Header/Header";
import { Outlet } from "react-router-dom";
import { StyledMainTemplate, WrapperOutlet } from "./styles";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <Header />
      <WrapperOutlet>
        <Outlet />
      </WrapperOutlet>

      <Footer />
    </StyledMainTemplate>
  );
};
