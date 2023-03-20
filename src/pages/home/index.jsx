import React, { useContext, useEffect, useState, useRef } from 'react';
import * as S from './styles'
import * as C from '../../components/index'
// import { Loading, Spinner, LoadingItems } from '../../components/Loading'


import { GlobalContext } from '../../hooks/useContext';
import useFetch from '../../hooks/useFetch';
import useScroolnfinity from '../../hooks/useScroolnfinity';



function Home() {
  const { namePoke, setNamePoke, recentsPokemon, setRecentsPokemon, favoritesPokemon, setFavoritesPokemon } = useContext(GlobalContext)
  const { request, data, response } = useFetch()

  const [pokemon, setPokemon] = useState([])
  const [currentPokemon, setCurrentPokemon] = useState('')
  const [allPokemons, setAllPokemons] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/')
  const [nextPageUrl, setNextPageUrl] = useState()
  const [previousPageUrl, setPreviousPageUrl] = useState()
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(12)
  const [loading, setLoading] = useState(false)
  const [itemsMore, setItemsMore] = useState(false)
  const [showDisplay, setShowDisplay] = useState(true)
  const [isNan, setIsNan] = useState(true)


  const lastRef = useRef(null);

  const isLastVisible = useScroolnfinity(lastRef.current)

  async function fetchPokemonModal(name) {
    let { json } = await request(`https://pokeapi.co/api/v2/pokemon/${name}`);
    setPokemon(json)
    let recentResults = json
    setRecentsPokemon((old) => [...old, recentResults])
  }

  async function fetchAddFavorite(name) {
    let { json } = await request(`https://pokeapi.co/api/v2/pokemon/${name}`);
    setPokemon(json)
    let addFavorites = json
    setFavoritesPokemon((old) => [...old, addFavorites])
  }


  async function fetchAllPokemon(limitItems) {
    let { json } = await request(`${currentPageUrl}pokemon?limit=${limitItems}&offset=${offset}`);
    setNextPageUrl(json.next)
    setPreviousPageUrl(json.previous)
    const promises = json.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url)
      const data = await res.json()
      return data
    })
    const results = await Promise.all(promises)
    setAllPokemons(results)
    setCurrentPokemon(results.name)
  }

  useEffect(() => {
    fetchAllPokemon(limit)
  }, [currentPageUrl, limit])

  useEffect(() => {
    if (isLastVisible) {
      setItemsMore(true)
      setTimeout(() => {
        const more = setLimit(limit + 4)
        setItemsMore(false)
      }, 1500)
    }
  }, [isLastVisible])


  function PreviousPage() {
    setCurrentPageUrl(previousPageUrl)
  }
  function NextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function onClickPokemon(id) {
    setLoading(true)
    setShowDisplay(false)
    fetchPokemonModal(id)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  function onClickFavorite(id) {

    if (allPokemons) {
      fetchAddFavorite(id)
      const arr = favoritesPokemon[0].id
      if (arr[0].id === id) {
        console.log(arr)
        console.log('id:' + id)
      }
    }



  }


  {/* {loading ? <C.Loading /> : ''} */ }
  return (
    <>
      <C.Modal
        show={showDisplay}
        onClickClose={() => setShowDisplay(!showDisplay)}
        onClickAddFavorite={() => onClickFavorite(pokemon?.id)}
        img={pokemon?.sprites?.other?.dream_world?.front_default}
        name={pokemon?.types?.[0].type?.name}
        loading={loading}
      />
      <C.Header
        state={setRecentsPokemon}
      />
      {favoritesPokemon != '' && (
        <S.CardFavorites>
          <S.IconLike />
          {favoritesPokemon.reverse().map((item, idx) => (
            <C.Favorites
              key={idx}
              img={item?.sprites?.versions?.['generation-v']?.['black-white']?.animated?.front_default}
            />
          ))}
        </S.CardFavorites>
      )}
      {recentsPokemon != '' && (
        <S.CardRecents>
          <S.SearchIcon />
          {recentsPokemon.reverse().map((item, idx) => (
            <C.Recents
              key={idx}
              img={item?.sprites?.versions?.['generation-v']?.['black-white']?.animated?.front_default}
            />
          ))
          }
        </S.CardRecents>
      )}


      <S.Container>
        <S.Card >
          {allPokemons?.map((i) => {
            return (
              <C.Pokemons
                onClick={() => onClickPokemon(i.id)}
                key={i.id}
                img={i.sprites.other.dream_world.front_default}
                name={i.name}
              />
            )
          })}
        </S.Card>
      </S.Container>
      {itemsMore ? <C.Spinner width="50px" /> : ''}
      <div
        style={{ height: '30px' }}
        ref={lastRef}
      ></div>
    </>
  );
}

export default Home;


// const getAllPokemons = async(limit = 50) => {

//   const res = await fetch(`${BASEURL}pokemon?limit=${limit}&offset=${offset}`)
//   const data = await res.json()

//   const promises = data.results.map(async(pokemon) => {
//     const res = await fetch(pokemon.url)
//     const data = await res.json()
//     return data
//   })
//   const results = await Promise.all(promises)
//   console.log(results)
//    setAllPokemons(results)
// }