import React from 'react';
import * as S from './styles';
import * as C from '../index'

function Content({
  name,
  img,
  height,
  weight,
  hp,
  attack,
  defense,
  spAttack,
  spDefense,
  speed,
  power,
  power2,
  loading,
  favorite
}) {
  return (
    <>
      {loading ?
        <C.FavoriteSet favorite={favorite}/>
        :
        <S.Container>
          <S.WrapperPokemon>
            <S.NamePokemonLarge>{name}</S.NamePokemonLarge>
            <S.Image src={img} alt={name} />
            <S.HeightAndWeight>
              <p>Height: {height}0cm</p>
              <p>Weight: {weight}kg</p>
            </S.HeightAndWeight>
          </S.WrapperPokemon>
          <S.WrapperStats>
            <S.Power src={power} />
            {power2 && (
              <S.Power src={power2} />
            )}
            <h1>Base stats</h1>
            <S.WrapperBaseStats>
              <S.TextStats>HP: {hp}</S.TextStats>
              <S.TextStats>ATTACK: {attack}</S.TextStats>
              <S.TextStats>DEFENSE: {defense}</S.TextStats>
              <S.TextStats>SP.ATTACK: {spAttack}</S.TextStats>
              <S.TextStats>SP.DEFENSE: {spDefense}</S.TextStats>
              <S.TextStats>SPEED: {speed}</S.TextStats>
            </S.WrapperBaseStats>
          </S.WrapperStats>
        </S.Container>
      }

    </>
  )
}

export default Content;