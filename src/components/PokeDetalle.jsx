import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ball from "../img/ballin.png";
import axios from 'axios';


const PokeDetalle = () => {
    const { id } = useParams();

    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(response => {
                console.log("=>", response.data.moves[0].move.name);
                setPokemon(response.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <div className="row"
            style={{
                background: "linear-gradient(#EEEBEB, #6dd5ed)"
            }}
        >
            <div
                className="col-md-4"
                style={{
                    padding: 50,
                    border: '8px solid black',
                    backgroundColor: 'red',
                    minHeight: '100vh',
                    color: '#660000'
                }} >

                <>
                    <a style={{ marginTop: 5, marginBottom: 5 }} href={`/`} className="btn btn-danger">{'<< '}  Inicio</a>

                    <h3 style={{ marginTop: 10, marginBottom: 10 }}>Información General</h3>
                    <p>{`Name: ${pokemon?.name}`}</p>
                    <p>{`Peso: ${pokemon?.weight} Kg`}</p>
                    <p>{`Altura: ${pokemon?.height} cms`}</p>
                    <p>{`movimiento 1: ${pokemon?.moves[0].move.name}`}</p>
                    <p>{`movimiento 2: ${pokemon?.moves[1].move.name}`}</p>
                    <p>{`movimiento 3: ${pokemon?.moves[2].move.name}`}</p>
                    <p>{`movimiento 4: ${pokemon?.moves[3].move.name}`}</p>
                    <p>{`movimiento 5: ${pokemon?.moves[4].move.name}`}</p>
                </>

            </div>
            <div className="col-md-6" style={{
                display: 'flex', alignItems: 'center', minHeight: '100vh',
                backgroundImage: `url(${ball})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 100,
                margin: '3%'
            }}>
                
                <img style={{ height: '40%', marginLeft: '10%' }}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`} alt="pokemon"  
                />
                <img style={{ height: '40%', marginLeft: '10%' }}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/${id}.gif`} alt="pokemon"  
                />
            </div>



        </div>
    )
}

export default PokeDetalle