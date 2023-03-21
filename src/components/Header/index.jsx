import React, { useState, useContext } from 'react';
import Logotipo from '../../assets/images/pokeapi_256.png';
import Search from '../Search';
import { GlobalContext } from '../../hooks/useContext'
import useFetch from '../../hooks/useFetch'
import * as C from '../../components/index'


import * as S from './styles';

function Header({ state }) {
  const [pokemon, setPokemon] = useState([])
  const [showDisplay, setShowDisplay] = useState(true)
  const [loading, setLoading] = useState(false)


  const { namePoke, setNamePoke, recentsPokemon, setRecentsPokemon } = useContext(GlobalContext)
  const { request, data, response } = useFetch()


  async function fetchPokemon(name) {
    let { json } = await request(`https://pokeapi.co/api/v2/pokemon/${name}`);
    console.log(response)
    setPokemon(json)
    let recentResults = json
    setRecentsPokemon((old) => [...old, recentResults])
  }

  function handleSubmit(name, e) {
    e.preventDefault();
    setLoading(true)
    setShowDisplay(false)
    fetchPokemon(name)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  return (
    <S.Container>
      <C.Modal
        show={showDisplay}
        onClickClose={() => setShowDisplay(!showDisplay)}
        img={pokemon?.sprites?.other?.dream_world?.front_default}
        name={pokemon?.types?.[0].type?.name}
        loading={loading}
      />
      <S.Wrapper>
        <S.Logo src={Logotipo} alt="logo-pokedex" />
        <Search onSubmit={(e) => handleSubmit(namePoke, e)} />
      </S.Wrapper>
    </S.Container>
  )
}

export default Header;