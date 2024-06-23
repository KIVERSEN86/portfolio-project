import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Wrapper } from "./Layout.styles";

function Layout() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      <Footer />
    </Wrapper>
  );
}

export default Layout;
