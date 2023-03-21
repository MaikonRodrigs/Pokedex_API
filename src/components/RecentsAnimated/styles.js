import styled, { keyframes } from "styled-components";

const Animation = keyframes`
  0% { 
    opacity: 0;
    margin-left: -100px;
  }

  50% { 
    opacity: .5;
    margin-left: 100px;

  }

  100% { 
    opacity: 1;
    margin-left: 0px;

  }
`;

export const Container = styled.div`
    position: absolute;
`;

export const Img = styled.img`
  /* position: absolute;
  bottom: 30px;
  left: 40px; */
  width: 50px;
  animation: ${Animation} 0.7s linear;
  -webkit-animation: ${Animation} 0.7s linear;
  /* width: 40px;
  height: 40px;
  padding: 15px;
  background: linear-gradient(to bottom, #ffffff 0%, #f7f7f7 100%);
  border-radius: 50%;
  box-shadow: 0 20px 25px -10px rgba(0, 0, 0, 0.15); */
`;
