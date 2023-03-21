import styled from "styled-components";
import { RadioButton } from "@styled-icons/remix-line/RadioButton";

export const WrapperNameId = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperDescription = styled.div``;

export const Id = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-weight: 800;
  text-shadow: var(--text-shadow);
`;

export const Name = styled.p`
  color: #ffffff;
  font-size: 35px;
  font-weight: 800;
  text-shadow: var(--text-shadow);
  margin-top: -30px;
  text-transform: capitalize;
`;

export const IconSend = styled(RadioButton)`
  width: 30px;
  color: red;
`;
