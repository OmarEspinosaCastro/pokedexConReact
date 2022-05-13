import { useState } from "react"
import PokemonContext from "./PokemonContext"
import ApiCall from './ApiCall'

const PokemonProvider = ({ children }) => {

  const [pokemons, setPokemons] = useState([]);
  const [pokemonsFill, setPokemonsFill] = useState([]);
  const [pokemonDetail, setPokemonDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  const getPokemons = async () => {
    try {
      setIsLoading(true);
      
      const pokemonsResult = await ApiCall({
        url: 'https://pokeapi.co/api/v2/pokemon?limit=300',
      })
      setPokemons(pokemonsResult.results);
      setPokemonsFill(pokemonsResult.results);
    } catch (err) {
      setPokemons([])
      console.error(err)
    } finally {
      setIsLoading(false);
    }
  }
  
  const getPokemonDetail = async (id) => {
    if (!id) return Promise.reject("Id es requerido");
    try {
      setIsLoading(true);
      const pokemonsDetail = await ApiCall({
        url: `https://pokeapi.co/api/v2/pokemon/${id}`,
      })
      setPokemonDetail(pokemonsDetail)
    } catch (err) {
      setPokemonDetail({});
      console.error(err)
    } finally {
      setIsLoading(false);
    }
  }

  
  const SetPokemonsFilter = async (filterPokeData) => {
    try {
      setPokemonsFill(filterPokeData);
    } catch (err) {
      setPokemons([])
      console.error(err)
    } finally {
      setIsLoading(false);
    }
  }
  

  return (
    <PokemonContext.Provider
      value={{
        getPokemons,
        pokemons,
        getPokemonDetail,
        pokemonDetail,
        isLoading,
        SetPokemonsFilter,
        pokemonsFill,
      }}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider;