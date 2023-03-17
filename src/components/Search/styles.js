import styled from "styled-components";
import { CatchingPokemon } from "@styled-icons/material-outlined/CatchingPokemon";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Wrapper = styled.div`
  width: 300px;
`;

export const Form = styled.form`
  border: 1px solid red;
  padding: 10px 15px;
  border-radius: 18px;
`;

export const Input = styled.input`
  color: var(--black);
  font-size: 17px;
`;

export const IconPokebola = styled(CatchingPokemon)`
  width: 30px;
  color: red;
  margin-left: 20px;
`;
