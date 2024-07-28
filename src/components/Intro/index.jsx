import * as S from "./Intro.styles";
import { Button, ButtonContainer } from "../../pages/Home/Home.styles";
import { Hr } from "../Layout/Layout.styles";
import kristofferImage from "../../assets/IMG_Kristoffer-Iversen.jpg";

export default function IntroSection() {
  return (
    <S.IntroContainer>
      <S.TextContainer>
        <S.MainHeading>Hi! I am Kristoffer</S.MainHeading>
        <S.SecondHeading>Front-end developer</S.SecondHeading>
        <Hr />
        <S.ThirdHeading>Experience with</S.ThirdHeading>
        <ButtonContainer>
          <Button>JS</Button>
          <Button>HTML</Button>
          <Button>React</Button>
          <Button>CSS</Button>
          <Button>SASS</Button>
          <Button>Styled Components</Button>
          <Button>Bootstrap</Button>
          <Button>Adobe XD</Button>
        </ButtonContainer>
      </S.TextContainer>
      <S.ImgContainer>
        <S.IntroImg src={kristofferImage} alt="Kristoffer Iversen" />
      </S.ImgContainer>
    </S.IntroContainer>
  );
}
