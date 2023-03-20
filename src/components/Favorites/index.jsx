import React from 'react';
import * as S from './styles';

function Favorites({ img }) {
  return (
    <S.Container>
      <S.Img src={img} />
    </S.Container>
  )
}

export default Favorites;