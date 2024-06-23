import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;


export const DefaultButton = styled.button`
  background-color: #fa292996;
  background-image: linear-gradient(#fa292975, #fa292975);
  background-size: 0 100%;
  background-repeat: no-repeat;
  transition: 0.4s;
  padding: 12px;
  border: none;
  width: 100%;
  font-family: "lato", sans-serif;
  font-weight: bold;

  &:hover {
    background-color: #fa292975;
    cursor: pointer;
    background-size: 100% 100%;
  }
`;

// possible button color: #fa292996

/* 
  background-color: #29c6fa;
  background-image: linear-gradient(#27bff1, #27bff1);
*/

export const DefaultContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  margin-top: 40px;
`;

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f7f5e7;
`;

export const Hr = styled.hr`
  margin: 50px 0;
`;
