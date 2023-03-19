import React, { useContext, useEffect, useState, useRef } from 'react';
import * as S from './styles'
import * as C from '../../components/index'
// import { Loading, Spinner, LoadingItems } from '../../components/Loading'


import { GlobalContext } from '../../hooks/useContext';
import useFetch from '../../hooks/useFetch';
import useScroolnfinity from '../../hooks/useScroolnfinity';



function Home() {
  const { namePoke, setNamePoke } = useContext(GlobalContext)
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

  const lastRef = useRef(null);
  const pokemonRef = useRef(null);
  console.log(pokemonRef.current)

  const isLastVisible = useScroolnfinity(lastRef.current)



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

  async function fetchPokemonModal(name) {
    let { json } = await request(`https://pokeapi.co/api/v2/pokemon/${name}`);
    setPokemon(json)
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
    console.log(currentPokemon)

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

  function OffsetCounter() {
    setLimit(limit + 4)
    console.log(limit)
  }

  function onClickPokemon(id) {
    setLoading(true)
    setShowDisplay(false)
    fetchPokemonModal(id)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  return (
    <>
      <C.Modal
        show={showDisplay}
        onClickClose={() => setShowDisplay(!showDisplay)}
        img={pokemon?.sprites?.other?.dream_world?.front_default}
        name={pokemon?.name}
        loading={loading}
      />
      {/* {loading ? <C.Loading /> : ''} */}
      <C.Header />
      <S.Container>
        <S.Card >
          {allPokemons?.map((i) => {
            return (
              <C.Pokemons
                onClick={() => onClickPokemon(i.id)}
                key={i.base_experience}
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
      {/* <button
        style={{ border: "1px red solid", padding: 10, borderRadius: 8, margin: 8 }}
        onClick={OffsetCounter}
        ref={lastRef}
      >CARREGAR</button> */}
    </>

    // <div>
    //   <h1 style={{textAlign: 'center', marginTop: 60}}>POKEMONS</h1>

    // </div >
  );
}

export default Home;