import styled from "styled-components";

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
  margin-top: 20px;
  color: var(--black);
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize;
  position: absolute;
  bottom: 30px;
  padding: 10px 50px;
  border-radius: 9999px;
  background: #d3cce3; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #e9e4f0,
    #d3cce3
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #e9e4f0,
    #d3cce3
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
