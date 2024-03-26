import React, { useEffect, useState } from 'react'
import axios from 'axios';

const PokListItem = (props) => {
    let ruta = props.url;
    const identificador = () => ruta.split('/')[6];
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${identificador()}/`)
            .then(response => {
                setPokemon(response.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <>
            <div
                className="card"
                style={{
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                }}>
                <img
                 style={{height:'50%',marginTop:10}} 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${identificador()}.svg`} alt="" />
                {/*  <h1>Peso: { pokemon.weight}Kg</h1>
        <h1>Altura: { pokemon.height }cm</h1>  */}
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <h5 className="card-title">{pokemon.weight}kg</h5>
                    <h5 className="card-title">{pokemon.height}cm</h5>
                    <a href={`/pokemon/${identificador()}`} className="btn btn-light">Detalles</a>
                </div>
            </div>
        </>

    )
}

export default PokListItem
