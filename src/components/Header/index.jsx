import React from 'react';
import Logotipo from '../../assets/images/pokeapi_256.png';
import Search from '../Search';

import * as S from './styles';

function Header() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Logo src={Logotipo} alt="logo-pokedex" />
        <Search />
      </S.Wrapper>
    </S.Container>
  )
}

export default Header;