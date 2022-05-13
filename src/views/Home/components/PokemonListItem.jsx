import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom"
import PokemonContext from "../../../api/pokemons/PokemonContext";
const PokemonListItem = (props) => {
    const getId = () => props.url.split("/")[6];
    return (
        <>
            <div 
            className="card" 
            style={{
                width: '100%',
                height:'100%', 
                textAlign:'center',
                backgroundColor: '#EEEBEB',
                background: "linear-gradient(#EEEBEB, #ffffff)"
                }}>
                <img style={{height:'50%',marginTop:10}}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${getId()}.svg`} alt="pokemon"
                />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <a href={`/pokemon/${getId()}`} className="btn btn-light">Detalles</a>
                </div>
            </div>
        </>
    )
}

export default PokemonListItem