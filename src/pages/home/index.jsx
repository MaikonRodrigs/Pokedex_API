import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../hooks/useContext';
import useFetch from '../../hooks/useFetch';


// import { Container } from './styles';

function Home() {
  const { namePoke, setNamePoke } = useContext(GlobalContext)
  const { request, data } = useFetch()

  const [pokemon, setPokemon] = useState(null)

  async function fetchData() {
    let { json } = await request(`https://pokeapi.co/api/v2/pokemon/${namePoke}`);
    setPokemon(json)
    console.log(pokemon)
  }
  
  function handlePokemon(e) {
    setNamePoke(e.target.value)
  }

  return (
    <div>
      <input type="text"
        value={namePoke || ''}
        onChange={handlePokemon}
      />
        <button onClick={fetchData}>BUSCAR POKEMON</button> <br />
      <span>
        <img src={pokemon?.sprites.front_default} alt="" />
      </span>
    </div>
  );
}

export default Home;