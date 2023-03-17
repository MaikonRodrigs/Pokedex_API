import styled from 'styled-components'

export const Container = styled.div`
  width: 1200px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 140px;
  `; 

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  flex: 1;
  flex-direction: row;
  gap: 1rem;
  max-width: 1200px;

`;
