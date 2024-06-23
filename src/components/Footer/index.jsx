import * as S from "./Footer.styles";
import * as A from "../Nav/Nav.styles";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <S.Footer>
      <A.Ul>
        <A.Li>
          <NavLink to="/">Home</NavLink>
        </A.Li>
        <A.Li>
          <NavLink to="/Projects">Projects</NavLink>
        </A.Li>
        <A.Li>
          <NavLink to="/About">About</NavLink>
        </A.Li>
      </A.Ul>
    </S.Footer>
  );
}
