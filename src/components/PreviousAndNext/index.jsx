import React from 'react';
import * as S from './styles';

function PreviousAndNext({ onClickPrevious, onClickNext, isLike, onClickLike, clearFavorites, displayClosedButton }) {
  return (
    <S.Container>
      <S.Previous onClick={onClickPrevious} />
      <S.Next onClick={onClickNext} />
      {displayClosedButton ?
        <S.Close onClick={clearFavorites} />
        :
        ''
      }
      {isLike ?
        <S.NotLike onClick={onClickLike} isLike={isLike} />
        :
        <S.IsLike onClick={onClickLike} isLike={isLike} />
      }
    </S.Container>
  )
}

export default PreviousAndNext;