import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  flex-direction: row;
  margin: 20px;
`; 

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 4rem;
`;
