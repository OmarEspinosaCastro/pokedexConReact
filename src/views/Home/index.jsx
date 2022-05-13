import React, { useState, useEffect, useContext } from 'react'
import PokemonList from './components/PokemonList'
import Search from './components/Search'
import PokemonContext from '../../api/pokemons/PokemonContext'
import background from "../../img/fondo.jpeg";


const Home = () => {
    const { getPokemons, pokemons, SetPokemonsFilter, pokemonsFill } = useContext(PokemonContext);
    const [results, setResults] = useState(false);

    useEffect(() => {
        getPokemons();
    }, [])

    const handleSearchPokemon = (searchText) => {
        const text = searchText.toLowerCase();
        const filterPokeData = pokemons.filter((value) => (
            value.name.toLowerCase().includes(text)
        ));
        SetPokemonsFilter(filterPokeData);
    }

    const handleSearchPokemonKey = (searchText) => {

        const text = searchText.toLowerCase();
        const filterPokeData = pokemons.filter((value) => (
            value.name.toLowerCase().includes(text)
        ));
        console.log(filterPokeData?.length);
        if (filterPokeData?.length) {
            setResults(false)
            SetPokemonsFilter(filterPokeData);
        } else {
            setResults(true)
        }

    }
    


    return (


        <div
            style={{height:'100vh', backgroundImage: `url(${background})`,backgroundAttachment:'fixed' }}
        >
            <Search handleSearchPokemon={handleSearchPokemon} handleSearchPokemonKey={handleSearchPokemonKey} />
            {
                results
                    ?
                    <h1 style={{ marginTop: 50, marginLeft: 70 }}>No hay existen coincidencias.. .</h1>
                    :
                    <PokemonList pokemons={pokemonsFill} />
            }

        </div>
    )
}
export default Home