import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PokemonContext from '../../api/pokemons/PokemonContext';
import PokeStats from './components/PokeStats';
import ball from "../../img/ballin.png";


const PokeDetail = () => {
  const { id } = useParams();
  const { getPokemonDetail, pokemonDetail, isLoading } = useContext(PokemonContext);

  useEffect(() => {
    getPokemonDetail(id).catch(null);
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
        padding:50, 
        border:'8px solid black', 
        backgroundColor:'red',
        minHeight:'100vh',
        color:'#660000'
        }} >



        {
          isLoading
            ?
            <div
              className="spinner-border text-primary"
              role="status" style={{
                width: '20rem',
                height: '20rem', 
                margin: '30%'
              }} />
            :
            <>
             <a style={{ marginTop: 5, marginBottom: 5 }} href={`/`} className="btn btn-danger">{'<< '}  Inicio</a>

              <h3 style={{ marginTop: 10, marginBottom: 10 }}>Información General</h3>
              <p>{`Name: ${pokemonDetail?.name}`}</p>
              <p>{`Peso: ${pokemonDetail?.weight} Kg`}</p>
              <p>{`Altura: ${pokemonDetail?.height}0 cms`}</p>
              <div>
                <h3 style={{ marginTop: 30, marginBottom: 15 }}>Habilidades</h3>
                <PokeStats stats={pokemonDetail?.stats ?? []} />
              </div>
            </>
        }
      </div>
      <div  className="col-md-6" style={{  display:'flex', alignItems:'center', minHeight:'100vh',
        backgroundImage: `url(${ball})`,
        backgroundRepeat  : 'no-repeat',
        backgroundSize: 100,
        margin:'3%'
       }}>
        <img style={{ height: '90%', marginLeft:'10%' }}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="pokemon"
        />
      </div>
      
      

    </div>
  )
}

export default PokeDetail