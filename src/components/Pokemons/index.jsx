import React from 'react';
import * as S from './styles';

function Pokemons({
  img,
  name,
  onClick,
  onClickFavorite
}) {

  return (
    <S.Container onClick={onClick}>
      <S.Card >
        <S.Image src={img} alt={name} />
      </S.Card>
      <S.Description>
        <span>{name}</span>
      </S.Description>
    </S.Container >
  )
}

export default Pokemons;