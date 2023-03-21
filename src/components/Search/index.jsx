import React, { useContext, useRef } from 'react';
import { GlobalContext } from '../../hooks/useContext'
import * as S from './styles';

function Search({ onSubmit, onClick, isNan }) {
  const { namePoke, setNamePoke } = useContext(GlobalContext)
  const inputRef = useRef()

  return (
    <S.Container>
      <S.Wrapper isNan={isNan}>
        <S.Form onSubmit={onSubmit}>
          <S.Input
            ref={inputRef}
            type="text"
            required
            placeholder="Search your pokemon..."
            value={namePoke || ''}
            onChange={e => setNamePoke(e.target.value)}
          />
          <S.IconSend onClick={onClick} />
        </S.Form>
        <S.NotFound isNan={isNan}>
          #PokemonNotFound
        </S.NotFound>
      </S.Wrapper>
    </S.Container>
  )
}

export default Search;