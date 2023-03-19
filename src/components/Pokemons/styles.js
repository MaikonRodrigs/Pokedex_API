import styled from "styled-components";
import { Heart } from "@styled-icons/boxicons-regular/Heart";

export const Container = styled.div`
  display: flex;
  width: 250px;
  height: 400px;
  border-radius: 16px;
  box-shadow: var(--shadow);
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  cursor: pointer;
  transition: all 0.2s linear;

  position: relative;
`;

export const Card = styled.div`
  padding: 20px;
`;

export const Image = styled.img`
  width: 120px;
  z-index: 999;
  &:hover {
    width: 220px;
  }
  transition: all 0.2s linear;
`;

export const Description = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-top: 20px;
  color: var(--black);
  position: absolute;
  bottom: 30px;
  padding: 10px 50px;
  border-radius: 9999px;
  background: #d3cce3; 
  background: -webkit-linear-gradient(to right #e9e4f0,#d3cce3);
  background: linear-gradient(to right,#e9e4f0,#d3cce3);
  
  span {    
    font-size: 18px;
    font-weight: bold;
    text-transform: capitalize;
  }
`;

export const IconLike = styled(Heart)`
  width: 30px;
  height: 30px;
`;
