import React, { useContext, useEffect, useState } from 'react';
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

  const [pokemon, setPokemon] = useState([])
  const [allPokemons, setAllPokemons] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
  const [nextPageUrl, setNextPageUrl] = useState()
  const [previousPageUrl, setPreviousPageUrl] = useState()


  async function fetchAllPokemons() {
    let { json } = await request(currentPageUrl);
    setAllPokemons(json.results)
    console.log(json)
    setPreviousPageUrl(json.previous)
    setNextPageUrl(json.next)
  }

  useEffect(() => {
    fetchAllPokemons()
  }, [currentPageUrl])


  function PreviousPage() {
    setCurrentPageUrl(previousPageUrl)
  }
  function NextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  return (
    <div>
      <h1>POKEMONS</h1>
      <button style={{ border: "1px red solid", padding: 10, borderRadius: 8, margin: 8 }} onClick={PreviousPage}>Previous</button>
      <button style={{ border: "1px red solid", padding: 10, borderRadius: 8, margin: 8 }} onClick={NextPage}>Next</button>
      {allPokemons.map((i) => {
        return (
          <p key={i.name}>{i.name}</p>
          // <img src={i.} alt="" />
        )
      })}
    </div >
  );
}

export default Home;