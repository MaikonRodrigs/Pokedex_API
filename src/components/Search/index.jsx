import React, { useState } from 'react';

import * as S from './styles';

function Search() {
  const [pokemon, setPokemon] = useState('')

  return (
    <S.Container>
      <S.Wrapper>
        <S.Form>
          <S.Input
            type="text"
            required
            autoComplete={true}
            placeholder="Search your pokemon..."
            value={pokemon}
            onChange={e => setPokemon(e.target.value)}
          />
        </S.Form>
      </S.Wrapper>
      <S.IconPokebola />
    </S.Container>
  )
}

export default Search;