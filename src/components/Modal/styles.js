import styled, { keyframes } from "styled-components";
import { CloseCircle } from "@styled-icons/ionicons-outline/CloseCircle";

const Animation = keyframes`
  0% { 
    opacity: 0
  }

  50% { 
    opacity: .5
  }

  75% { 
    opacity: .75

  }

  100% { 
    opacity: 1
  }
`;

export const Container = styled.div`
  display: ${({ show }) => (show ? "none" : "flex")};
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: auto;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  backdrop-filter: blur(12px);
`;

export const Wrapper = styled.div`
  border-radius: 15px;
  padding: 40px;
  width: 600px;
  height: 600px;
  position: relative;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  box-shadow: var(--shadow);
  animation: ${Animation} .7s linear;
  -webkit-animation: ${Animation} .7s linear;
`;

export const CloseButton = styled(CloseCircle)`
  position: absolute;
  top: 22px;
  right: 22px;
  width: 40px;
  cursor: pointer;
  color: var(--black);
  &:hover {
    color: red;
  }
`;
