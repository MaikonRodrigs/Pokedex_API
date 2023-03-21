import React from 'react';
import * as S from './styles';

function PreviousAndNext({ onClickPrevious, onClickNext, isLike, onClickLike }) {
  return (
    <S.Container>
      <S.Previous onClick={onClickPrevious} />
      <S.Next onClick={onClickNext} />
      {isLike ?
        <S.NotLike onClick={onClickLike} isLike={isLike} />
        :
        <S.IsLike onClick={onClickLike} isLike={isLike} />
      }
    </S.Container>
  )
}

export default PreviousAndNext;