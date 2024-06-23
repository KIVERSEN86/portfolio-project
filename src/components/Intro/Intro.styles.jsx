import styled from "styled-components";

export const IntroContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ImgContainer = styled.div`
  flex: 1;
  margin: 10px;
  display: none;
  @media (min-width: 900px) {
    display: block;
  }
`;

export const TextContainer = styled.div`
  flex: 2;
  margin: 10px;
`;

export const IntroImg = styled.img`
  border-radius: 10px;
  max-height: 550px;
  object-fit: cover;
`;

export const MainHeading = styled.h1`
  margin-top: 0;
  font-size: 2.6rem;
  font-family: "Playfair Display", serif;
  text-align: center;

  @media (min-width: 900px) {
    text-align: start;
  }
`;

export const SecondHeading = styled.h2`
  font-size: 3.4rem;
  font-family: "Playfair Display", serif;
    text-align: center;

  @media (min-width: 900px) {
    text-align: start;
`;

export const ThirdHeading = styled.h3`
  font-size: 1.6rem;
  font-family: "Playfair Display", serif;
`;
