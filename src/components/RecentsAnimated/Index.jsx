import React from 'react';

import * as S from './styles';

function RecentsAnimated({
  img
}) {
  return (
    <S.Container>
      <S.Img src={img} />
    </S.Container>
  )
}

export default RecentsAnimated;