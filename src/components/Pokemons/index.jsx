import React from 'react';

import * as S from './styles';

function Pokemons({
  img,
  name
}) {

  return (
    <S.Container>
      <S.Card>
        <S.Image src={img} alt={name} />
      </S.Card>
      <S.Description>
        {name}
      </S.Description>
    </S.Container>
  )
}

export default Pokemons;