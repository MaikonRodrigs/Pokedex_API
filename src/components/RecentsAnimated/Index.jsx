import React from 'react';

import * as S from './styles';

function RecentsAnimated({
  img,
  ArrowDisplay,
  onClick
}) {
  return (
    <S.Container ArrowDisplay={ArrowDisplay} onClick={onClick}>
      <S.Img src={img} />
    </S.Container>
  )
}

export default RecentsAnimated;