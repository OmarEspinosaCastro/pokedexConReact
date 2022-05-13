import React, { useEffect, useState, useContext } from 'react'
import data from '../../../user.json';
import PokemonListItem from './PokemonListItem';
import PokemonContext from '../../../api/pokemons/PokemonContext'

const PokemonList = (props) => {
    const { isLoading } = useContext(PokemonContext);

    return (
        <div className="row"
            style={{
                alignSelf: 'center',
                padding: '0rem 4rem 0rem 4rem',
            }}>
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
                    props.pokemons?.map((pokemon, index) => (
                        <div  key={index} className="col-md-3" style={{ marginTop: 10,height: 200 }}>
                            <PokemonListItem key={index} {...pokemon} />
                        </div>
                    ))
            }
        </div>
    )
}

export default PokemonList