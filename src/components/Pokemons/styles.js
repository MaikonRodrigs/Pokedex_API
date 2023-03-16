import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 350px;
  border-radius: 8px;
  box-shadow: var(--shadow);
  background-color: var(--gray-light);
  /* padding: 30px 0; */
`;
export const Card = styled.div`
  display: flex;
  flex: 1;
  justify-items: center;
  align-items: center;
  flex-direction: column;
`;
export const Image = styled.img`
  width: 140px;
`;
export const Description = styled.div`
  margin-top: 60px;
  color: var(--black);
  font-size: 22px;

`;
