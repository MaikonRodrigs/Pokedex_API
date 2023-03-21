import React from 'react';

import * as S from './styles';

function Favorites({
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

export default Favorites;