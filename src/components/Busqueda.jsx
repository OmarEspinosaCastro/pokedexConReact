import React, { useState } from 'react'

const Busqueda = (props) => {

    const [searchText, setSearchText] = useState("")

    return (
        <div className="row">
            <div className="col-md-1">

            </div>
            <div
                className="col-md-10"
                style={{
                    display: 'flex',
                    backgroundColor: 'gray',
                    padding: 40,
                    borderRadius: 5,
                    marginBottom: 10,
                    marginTop: 10,
                    background: "linear-gradient(#EEEBEB, #ffffff)"
                }}>
                <h4>Ingresa el Nombre a buscar: </h4>
                <input
                    style={{ width: '50%', marginLeft: '3%' }}
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                    value={searchText}
                    onChange={({ target: { value } }) => setSearchText(value, props.handleSearchPokemonKey(value))}
                />
            </div>
            <div className="col-md-4">

            </div>

        </div>
    )
}

export default Busqueda