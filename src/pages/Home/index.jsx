import CardSection from "../../components/Card";
import IntroSection from "../../components/Intro";
import * as S from "../Home/Home.styles";
import * as LS from "../../components/Layout/Layout.styles";

export function Home() {
  return (
    <LS.DefaultContainer>
      <S.HomeContainer>
        <IntroSection />
        <LS.Hr />
        <CardSection />
      </S.HomeContainer>
    </LS.DefaultContainer>
  );
}

export default Home;
