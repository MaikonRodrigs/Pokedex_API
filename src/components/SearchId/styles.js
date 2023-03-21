import styled from "styled-components";
import { RadioButton } from "@styled-icons/remix-line/RadioButton";

export const Container = styled.div`
  /* margin-right: 30px;
  margin-top: 60px; */
`;
export const Wrapper = styled.div`
  /* width: 300px; */
  span {
  }
`;

export const NotFound = styled.span`
  display: ${({ isNan }) => (isNan ? "block" : "none")};
  color: red;
  margin-top: 5px;
  margin-left: 104px;
  font-weight: 600;
  text-shadow: var(--text-shadow);
`;

export const Form = styled.form`
  border: 1px solid white;
  padding: 10px 15px;
  border-radius: 6px;
  background-color: white;
  box-shadow: var(--shadow);
`;

export const Input = styled.input`
  color: var(--black);
  font-size: 17px;
`;

export const IconSend = styled(RadioButton)`
  width: 30px;
  color: red;
  margin-right: -4px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;
