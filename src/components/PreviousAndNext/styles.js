import styled, { keyframes } from "styled-components";
import { ArrowRightCircle } from "@styled-icons/bootstrap/ArrowRightCircle";
import { ArrowLeftCircle } from "@styled-icons/bootstrap/ArrowLeftCircle";
import { Heart } from "@styled-icons/evaicons-solid/Heart";
import { CloseCircle } from "@styled-icons/remix-line/CloseCircle";
import { GroupReturn } from "@styled-icons/fluentui-system-filled/GroupReturn";
import { DeleteArrowBack } from "@styled-icons/fluentui-system-filled/DeleteArrowBack";

import * as H from "@styled-icons/boxicons-regular/Heart";

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
  display: flex;
  gap: 1rem;
  /* position: absolute;
  top: 1300px;
  left: 100px; */
`;

export const Next = styled(ArrowRightCircle)`
  width: 30px;
  cursor: pointer;
  color: #fff;
  animation: ${Animation} 0.7s linear;
  -webkit-animation: ${Animation} 0.7s linear;
  &:hover {
    color: black;
  }
`;
export const Previous = styled(ArrowLeftCircle)`
  width: 30px;
  cursor: pointer;
  color: #fff;
  animation: ${Animation} 0.7s linear;
  -webkit-animation: ${Animation} 0.7s linear;
  &:hover {
    color: black;
  }
`;

export const NotLike = styled(Heart)`
  width: 30px;
  cursor: pointer;
  color: red;
  display: block;
  animation: ${Animation} 0.7s linear;
  -webkit-animation: ${Animation} 0.7s linear;
`;

export const IsLike = styled(H.Heart)`
  width: 30px;
  cursor: pointer;
  color: #fff;
  display: block;
  animation: ${Animation} 0.7s linear;
  -webkit-animation: ${Animation} 0.7s linear;
`;

export const Close = styled(DeleteArrowBack)`
  width: 30px;
  top: 0;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
