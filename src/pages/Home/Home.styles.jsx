import styled from "styled-components";
import { DefaultButton } from "../../components/Layout/Layout.styles";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled(DefaultButton)`
  border-radius: 10px;
  max-width: 150px;
  margin: 10px;
  color: white;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
