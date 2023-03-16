import React from 'react';

import * as S from './styles';

function Pokemons({
  img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg',
  name = 'Ratata'
}) {

  const imgPokemon = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg'
  return (
    <S.Container>
      <S.Card>
        <S.Image src={img} alt={name} />
        <S.Description>
          {name}
        </S.Description>
      </S.Card>
    </S.Container>
  )
}

export default Pokemons;