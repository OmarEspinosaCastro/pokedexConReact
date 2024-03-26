import React, { useEffect, useState } from 'react'
import Busqueda from './Busqueda'
import PokList from './PokListItem';
import axios from 'axios';
import background from "../img/fondo.jpeg";
import PokemonList from "./PokemonList"

const Home = () => {
  const [listaPokemon, setListaPokemon] = useState();
  const [filtro, setFiltro] = useState();
  const [results, setResults] = useState(false);


  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=300").then(res => {
      setListaPokemon(res.data.results)
      setFiltro(res.data.results);
    });
  }, []);

  const handleSearchPokemonKey = (searchText) => {
    const text = searchText.toLowerCase();
    if (text.length > 0) {
      const filterPokeData = listaPokemon.filter((value) => (
        value.name.toLowerCase().includes(text)
      ));
      if (filterPokeData?.length) {
        setResults(false);
        setFiltro(filterPokeData);
      } else {
        setResults(true);
      }
    } else {
      setFiltro(listaPokemon);
    }

  }

  return (
    <div
      style={{ height: '100vh', backgroundImage: `url(${background})`, backgroundAttachment: 'fixed' }}
    >
      <Busqueda handleSearchPokemonKey={handleSearchPokemonKey} />


      {
        results
          ?
          <h1 style={{ marginTop: 50, marginLeft: 70 }}>No hay existen coincidencias.. .</h1>
          :
          <PokemonList pokemons={filtro} />
      }

    </div>
  )
}

export default Home