import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PokListItem from './PokListItem';

const PokemonList = (props) => {

    return (
        <div className="row"
            style={{
                alignSelf: 'center',
                padding: '0rem 4rem 0rem 4rem',
            }}>
            {
                props.pokemons?.map((pokemon, index) => (
                    <div key={index} className="col-md-4" style={{ marginTop: 10, height: 400 }}>
                        <PokListItem key={index} {...pokemon} />
                    </div>
                ))
            }
        </div>
    )
}

export default PokemonList