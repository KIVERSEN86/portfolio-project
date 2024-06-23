import { NavLink } from "react-router-dom";
import * as S from "../Nav/Nav.styles";

export default function Nav() {
  return (
    <S.Nav>
      <S.Ul>
        <S.Li>
          <NavLink to="/">Home</NavLink>
        </S.Li>
        <S.Li>
          <NavLink to="/Projects">Projects</NavLink>
        </S.Li>
        <S.Li>
          <NavLink to="/About">About</NavLink>
        </S.Li>
      </S.Ul>
    </S.Nav>
  );
}
