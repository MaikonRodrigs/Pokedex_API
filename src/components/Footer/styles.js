import styled from "styled-components";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";

export const Container = styled.div`
  /* position: relative; */
  @media (max-width: 1024px) {
    /* display: none; */
    /* position: relative; */
  }
`;

export const GitUser = styled.span`
  position: absolute;
  bottom: 0;
  /* top: 10px;
  */
  left: 31px;
  bottom: 190px;
  transform: translate(-50%, -50%);
  p {
    transform: rotate(270deg);

  }
`;

export const ReactIcon = styled(ReactLogo)`
  width: 40px;
  height: 40px;
  margin: 4px;
  color: var(--white);
`;
