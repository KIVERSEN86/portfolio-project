import * as S from "../Card/Card.styles";
import { CardHeading } from "../Card/Card.styles";

function CardSection() {
  return (
    <>
      <CardHeading>Featured projects</CardHeading>
      <S.CardSection>
        <S.CardContainer>
          <S.ImgContainer>
            <S.CardImg src="src/assets/JS-FW-2-Home.png"></S.CardImg>
          </S.ImgContainer>
          <S.CardInfo>
            <ul>
              <h4>JavaScript Frameworks CA</h4>
              <li>
                <b>Description:</b> eCom store built with React
              </li>
              <li>
                <b>Repo:</b>
                <a href="https://github.com/KIVERSEN86/js-fw-ca.git"> Github Repo</a>
              </li>
              <li>
                <b>Live site:</b>
                <a href="https://mellow-madeleine-40b595.netlify.app/"> eCom store</a>
              </li>
            </ul>
          </S.CardInfo>
          <S.CardButton>View more</S.CardButton>
        </S.CardContainer>
        <S.CardContainer>
          <S.ImgContainer>
            <S.CardImg src="src/assets/SEM-PROJ-2-HOME.png"></S.CardImg>
          </S.ImgContainer>
          <S.CardInfo>
            <ul>
              <h4>Semester project 2</h4>
              <li>
                <b>Description:</b> Wiki-style website for front-end developers
              </li>
              <li>
                <b>Repo:</b>
                <a href="https://github.com/KIVERSEN86/Semester-Project_2.git"> Github Repo</a>
              </li>
              <li>
                <b>Live site:</b>
                <a href="https://bookofcode.netlify.app/"> Book of Code</a>
              </li>
            </ul>
          </S.CardInfo>
          <S.CardButton>View more</S.CardButton>
        </S.CardContainer>
        <S.CardContainer>
          <S.ImgContainer>
            <S.CardImg src="src/assets/PROJECT-EXAM-2.png"></S.CardImg>
          </S.ImgContainer>
          <S.CardInfo>
            <ul>
              <h4>Project Exam 2</h4>
              <li>
                <b>Description:</b> Social Media website
              </li>
              <li>
                <b>Repo:</b>
                <a href="https://github.com/Noroff-FEU-Assignments/project-exam-2-KIVERSEN86.git"> Github Repo</a>
              </li>
              <li>
                <b>Live site:</b>
                <a href="#"> Live site not available - currently under development</a>
              </li>
            </ul>
          </S.CardInfo>
          <S.CardButton>View more</S.CardButton>
        </S.CardContainer>
      </S.CardSection>
    </>
  );
}

export default CardSection;
