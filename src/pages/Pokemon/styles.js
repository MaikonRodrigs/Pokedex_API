import styled from "styled-components";

export const Container = styled.div`
  padding-top: 50px;
  padding-bottom: 60px;
  padding-left: 30px;
  padding-right: 30px;
  height: 93.7vh;
  border-radius: 16px;
  max-width: 1600px;
  /* width: 100vm; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: transparent;
  transition: all .3s ease-in-out;


  @media screen and (max-width: 1200px) {
  }

`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  overflow: hidden;
  margin-left: -10px;
  margin-top: 20px;
  gap: 3rem;
`;


