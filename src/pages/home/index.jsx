import React, { useContext, useEffect, useState } from 'react';
import * as S from './styles'
import Pokemons from '../../components/Pokemons'
import { GlobalContext } from '../../hooks/useContext';
import useFetch from '../../hooks/useFetch';


// import { Container } from './styles';
// async function fetchData() {
//   let { json } = await request(`https://pokeapi.co/api/v2/pokemon/${namePoke}`);
//   setPokemon(json)
//   // console.log(pokemon)
// }

function Home() {
  const { namePoke, setNamePoke } = useContext(GlobalContext)
  const { request, data, response } = useFetch()

  // const [pokemon, setPokemon] = useState([])
  const [allPokemons, setAllPokemons] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/')
  const [nextPageUrl, setNextPageUrl] = useState()
  const [previousPageUrl, setPreviousPageUrl] = useState()


  const [offset, setOffset] = useState(0)

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


  async function fetchAllPokemon(limit = 5) {
    let { json } = await request(`${currentPageUrl}pokemon?limit=${limit}&offset=${offset}`);
    setNextPageUrl(json.next)
    setPreviousPageUrl(json.previous)
    const promises = json.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url)
      const data = await res.json()
      return data
    })
    const results = await Promise.all(promises)
    console.log(results)
    setAllPokemons(results)
  }


  useEffect(() => {
    fetchAllPokemon()
  }, [currentPageUrl])


  function PreviousPage() {
    setCurrentPageUrl(previousPageUrl)
  }
  function NextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function OffsetCounter(n) {
    setOffset(offset + n)
    console.log(offset)
    window.reload()
  }

  return (
    <>
      <S.Container>
        <S.Card>
          {allPokemons?.map((i) => {
            return (
              <Pokemons
                key={i.base_experience}
                img={i.sprites.other.dream_world.front_default}
                name={i.name}
              />
            )
          })}
        </S.Card>
      </S.Container>
    </>

    // <div>
    //   <h1 style={{textAlign: 'center', marginTop: 60}}>POKEMONS</h1>
    //   {/* <button style={{ border: "1px red solid", padding: 10, borderRadius: 8, margin: 8 }} onClick={fetchAllPokemons}>CARREGAR</button> */}

    // </div >
  );
}

export default Home;