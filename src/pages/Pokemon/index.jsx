import React, { useState, useEffect, useContext } from 'react';
import * as S from './styles';
import * as C from '../../components/index'
import * as I from '../../assets/images/index'

import useFetch from '../../hooks/useFetch';
import { changeToArbitraryColor } from '../../utils/changeToArbitraryColor'
import { GlobalContext } from '../../hooks/useContext';


function Pokemon() {
  const { request, data, response, error } = useFetch()

  const [pokemon, setPokemon] = useState([])
  const [isPokemon, setIsPokemon] = useState([])
  const [currentPokemon, setCurrentPokemon] = useState('')
  const [favoritesPokemon, setFavoritesPokemon] = useState([])
  const [id, setId] = useState(2)
  const [idPokemon, setIdPokemon] = useState(0)
  const [loading, setLoading] = useState(false)
  const [isLiked, setIsLiked] = useState(false);
  const [notFound, setNotFound] = useState(false)

  const { namePoke, setNamePoke } = useContext(GlobalContext)

  useEffect(() => {
    fetchPokemon('1')
  }, [])

  async function fetchPokemon(name) {
    setLoading(true)
    setIsLiked(false)
    let namePokemon = name.toString().toLowerCase()
    let { json } = await request(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);
    if (json === null) {
      let { json } = await request(`https://pokeapi.co/api/v2/pokemon/pikachu`);
      let JSON = json
      setPokemon(JSON)
      setNotFound(true)
    } else {
      setIdPokemon(json.id)
      setPokemon(json)
      setNotFound(false)
    }
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }

  async function fetchPokemonFavorite(name) {
    changeToArbitraryColor()
    setLoading(true)
    setIsLiked(true)
    let { json } = await request(`https://pokeapi.co/api/v2/pokemon/${name}`);
    setIdPokemon(json.id)
    setPokemon(json)
    setNotFound(false)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }

  async function fetchNextPrevious(i) {
    setLoading(true)
    let { json } = await request(`https://pokeapi.co/api/v2/pokemon/${i}`);
    setPokemon(json)
    setIdPokemon(json.id)
    setNotFound(false)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }

  async function fetchAddFavorite(name) {
    setLoading(true)
    let { json } = await request(`https://pokeapi.co/api/v2/pokemon/${name}`);
    setIsPokemon(json.name)
    setCurrentPokemon(json.name)
    setNotFound(false)
    let addFavorites = json
    if (currentPokemon === pokemon.name) {
    } else setFavoritesPokemon((old) => [...old, addFavorites])
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }

  function Previous() {
    if (id === id) {
      let ID = idPokemon - 1;
      setId(ID)
      setIdPokemon(ID)
      fetchNextPrevious(ID)
    }
    changeToArbitraryColor()
    setIsLiked(false)
  }

  function Next() {
    if (idPokemon === 1) {
      fetchNextPrevious(id)
      setId(id + 1)
    } else if (idPokemon >= 2) {
      setId(idPokemon)
      if (idPokemon === idPokemon) {
        let ID = idPokemon + 1
        console.log(ID)
        fetchNextPrevious(ID)
        setIdPokemon(ID)
        setId(ID)
      }
      setIsLiked(false)
      changeToArbitraryColor()
    }
  }

  function handleAddFavorite(id) {
    fetchAddFavorite(id)
    setIsLiked(true)
    changeToArbitraryColor()
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetchPokemon(namePoke)
    changeToArbitraryColor()
    setNamePoke('')
  }

  function handleKeyPress(e) {
    if (e.key === " ") {
      Next()
    }
    if (e.key === "ArrowRight") {
      Next()
    }
    if (e.key === "ArrowUp") {
      Next()
    }
    if (e.key === "ArrowDown") {
      Previous()
    }
    if (e.key === "ArrowLeft") {
      Previous()
    }
  }

  function clearFavorites() {
    const arr = favoritesPokemon.pop();
    setFavoritesPokemon((old) => [...old])
    changeToArbitraryColor()
  }

  return (
    <>
      <S.Container tabIndex={0} onKeyDown={handleKeyPress}>
        {data && (
          <>
            <C.Header
              id={pokemon?.id}
              name={pokemon?.name}
              onSubmit={e => handleSubmit(e)}
              onClick={e => handleSubmit(e)}
              isNan={notFound}
            />
            <C.PreviousAndNext
              onClickPrevious={Previous}
              onClickNext={Next}
              onClickLike={() => handleAddFavorite(pokemon.id)}
              isLike={isLiked}
              displayClosedButton={favoritesPokemon[0]}
              clearFavorites={clearFavorites}
            />
            <S.Card>
              {data && (
                (favoritesPokemon.map((item, idx) => (
                  <C.Favorites
                    onClick={() => fetchPokemonFavorite(favoritesPokemon[idx]?.id)}
                    ArrowDisplay={true}
                    key={isPokemon?.id}
                    img={item?.sprites?.other?.['official-artwork']?.front_default}
                  // img={item?.sprites?.versions?.['generation-v']?.['black-white']?.animated?.front_default}
                  />
                )))
              )}
            </S.Card>
            <C.Content
              loading={loading}
              name={pokemon?.name}
              power={
                (pokemon?.types[0]?.type?.name === 'bug' && I.Bug) ||
                (pokemon?.types[0]?.type?.name === 'electric' && I.Electric) ||
                (pokemon?.types[0]?.type?.name === 'fairy' && I.Fairy) ||
                (pokemon?.types[0]?.type?.name === 'fire' && I.Fire) ||
                (pokemon?.types[0]?.type?.name === 'fighting' && I.Fighting) ||
                (pokemon?.types[0]?.type?.name === 'Flying' && I.Flying) ||
                (pokemon?.types[0]?.type?.name === 'ghost' && I.Ghost) ||
                (pokemon?.types[0]?.type?.name === 'grass' && I.Grass) ||
                (pokemon?.types[0]?.type?.name === 'ground' && I.Ground) ||
                (pokemon?.types[0]?.type?.name === 'ice' && I.Ice) ||
                (pokemon?.types[0]?.type?.name === 'normal' && I.Normal) ||
                (pokemon?.types[0]?.type?.name === 'poison' && I.Poison) ||
                (pokemon?.types[0]?.type?.name === 'psychic' && I.Psychic) ||
                (pokemon?.types[0]?.type?.name === 'rock' && I.Rock) ||
                (pokemon?.types[0]?.type?.name === 'steel' && I.Steel) ||
                (pokemon?.types[0]?.type?.name === 'water' && I.Water)
              }
              power2={
                (pokemon?.types[1]?.type?.name === 'bug' && I.Bug) ||
                (pokemon?.types[1]?.type?.name === 'electric' && I.Electric) ||
                (pokemon?.types[1]?.type?.name === 'fairy' && I.Fairy) ||
                (pokemon?.types[1]?.type?.name === 'fire' && I.Fire) ||
                (pokemon?.types[1]?.type?.name === 'fighting' && I.Fighting) ||
                (pokemon?.types[1]?.type?.name === 'Flying' && I.Flying) ||
                (pokemon?.types[1]?.type?.name === 'ghost' && I.Ghost) ||
                (pokemon?.types[1]?.type?.name === 'grass' && I.Grass) ||
                (pokemon?.types[1]?.type?.name === 'ground' && I.Ground) ||
                (pokemon?.types[1]?.type?.name === 'ice' && I.Ice) ||
                (pokemon?.types[1]?.type?.name === 'normal' && I.Normal) ||
                (pokemon?.types[1]?.type?.name === 'poison' && I.Poison) ||
                (pokemon?.types[1]?.type?.name === 'psychic' && I.Psychic) ||
                (pokemon?.types[1]?.type?.name === 'rock' && I.Rock) ||
                (pokemon?.types[1]?.type?.name === 'steel' && I.Steel) ||
                (pokemon?.types[1]?.type?.name === 'water' && I.Water)
              }
              img={pokemon.sprites?.other?.['official-artwork']?.front_default}
              height={pokemon?.height}
              weight={pokemon?.weight}
              hp={pokemon?.stats[0]?.base_stat}
              attack={pokemon?.stats[1]?.base_stat}
              defense={pokemon?.stats[2]?.base_stat}
              spAttack={pokemon?.stats[3]?.base_stat}
              spDefense={pokemon?.stats[4]?.base_stat}
              speed={pokemon?.stats[4]?.base_stat}
            />
          </>
        )}
      </S.Container >
    </>
  )
}

export default Pokemon;