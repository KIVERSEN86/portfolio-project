import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 100px;
  font-family: "Playfair Display", serif;
  font-weight: bold;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;
