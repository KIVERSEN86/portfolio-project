import styled from "styled-components";
import { DefaultButton } from "../Layout/Layout.styles";
import { ThirdHeading } from "../Intro/Intro.styles";

export const CardContainer = styled.div`
  background: white;
  min-height: 440px;
  max-width: 330px;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 5px 5px 5px lightgrey;

  &:hover {
    box-shadow: 5px 5px 5px grey;
    cursor: pointer;
  }
`;

export const ImgContainer = styled.div``;

export const CardImg = styled.img`
  object-fit: cover;
  height: 240px;
  border-radius: 10px 10px 0 0;
`;

export const CardInfo = styled.div`
  margin-left: 10px;

  h4 {
    font-family: "Playfair Display", serif;
  }

  li {
    font-family: "lato", sans-serif;
    margin: 10px 0;
  }
`;

export const CardSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const CardButton = styled(DefaultButton)`
  border-radius: 0 0 10px 10px;
  background-color: #327868;
  background-image: linear-gradient(#2f6f60, #2f6f60);
  color: white;

  &:hover {
    background-color: #2f6f60;
  }
`;

export const CardHeading = styled(ThirdHeading)`
  margin: 0 0 5px 10px;
`;
