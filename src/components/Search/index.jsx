import React, { useContext, useRef } from 'react';
import { RedRiver } from 'styled-icons/fa-brands';
import { GlobalContext } from '../../hooks/useContext'
import * as S from './styles';

function Search({ onSubmit }) {
  const { namePoke, setNamePoke } = useContext(GlobalContext)
  const inputRef = useRef()

  function clearSearch() {
    
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.Form onSubmit={onSubmit}>
          <S.Input
            ref={inputRef}
            type="text"
            required
            placeholder="Search your pokemon..."
            value={namePoke || ''}
            onChange={e => setNamePoke(e.target.value)}
          />
        </S.Form>
      </S.Wrapper>
      <S.IconPokebola />
    </S.Container>
  )
}

export default Search;