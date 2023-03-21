import React, { useState, useEffect, useRef, useContext } from 'react';
import * as S from './styles';
import * as C from '../../components/index'
import * as I from '../../assets/images/index'

import useFetch from '../../hooks/useFetch';
import { GlobalContext } from '../../hooks/useContext';


function Pokemon() {
  const { request, data, response } = useFetch()

  const [pokemon, setPokemon] = useState([])
  const [isPokemon, setIsPokemon] = useState([])
  const [currentPokemon, setCurrentPokemon] = useState('')
  const [favoritesPokemon, setFavoritesPokemon] = useState([])
  const [id, setId] = useState(2)
  const [loading, setLoading] = useState(false)
  const [isClicked, setIsClicked] = useState(true);
  const [isLiked, setIsLiked] = useState(true);

  const { namePoke, setNamePoke } = useContext(GlobalContext)
  const childRef = useRef(null);

  async function fetchPokemon(name) {
    setLoading(true)
    let namePokemon = name.toString().toLowerCase()
    let { json } = await request(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);
    setId(json.id)
    setPokemon(json)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }

  async function fetchNextPrevious(i) {
    setLoading(true)
    let { json } = await request(`https://pokeapi.co/api/v2/pokemon/${i}`);
    setPokemon(json)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }

  async function fetchAddFavorite(name) {
    setLoading(true)
    let { json } = await request(`https://pokeapi.co/api/v2/pokemon/${name}`);
    setIsPokemon(json.name)
    setCurrentPokemon(json.name)
    let addFavorites = json
    if (currentPokemon === pokemon.name) {
    } else setFavoritesPokemon((old) => [...old, addFavorites])
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }

  const changeToArbitraryColor = () => {
    document.body.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    setIsClicked(!isClicked);
    document.body.style.borderRadius = "16px"
  };

  useEffect(() => {
    fetchPokemon('1')
  }, [])

  useEffect(() => {
    childRef.current.style.backgroundColor =
      document.body.style.backgroundColor;
    childRef.current.style.borderRadius =
      document.body.style.borderRadius;
  });

  function Previous() {
    setId(id - 1)
    fetchNextPrevious(id)
    changeToArbitraryColor()
    setIsLiked(false)
  }

  function Next() {
    setId(id + 1)
    fetchNextPrevious(id)
    changeToArbitraryColor()
    setIsLiked(false)
  }

  function handleAddFavorite(id) {
    fetchAddFavorite(id)
    setIsLiked(true)
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetchPokemon(namePoke)
    setNamePoke('')
  }

  return (
    <>
      <S.Container bg={changeToArbitraryColor} ref={childRef} >
        {data && (
          <>
            <C.IdName
              id={pokemon?.id}
              name={pokemon?.name}
              onSubmit={e => handleSubmit(e)}
              onClick={e => handleSubmit(e)}
            />
            <C.PreviousAndNext
              onClickPrevious={Previous}
              onClickNext={Next}
              onClickLike={() => handleAddFavorite(pokemon.id)}
              isLike={isLiked}
            />
            <C.ImageName
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
      <S.Card>
        {data && (
          (favoritesPokemon.reverse().map((item) => (
            <C.RecentsAnimated
              key={isPokemon?.id}
              img={item?.sprites?.other?.['official-artwork']?.front_default}
            // img={item?.sprites?.versions?.['generation-v']?.['black-white']?.animated?.front_default}
            />
          )))
        )}
      </S.Card>

    </>
  )
}

export default Pokemon;