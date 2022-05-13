import React from 'react'

const PokeStats = (props) => {
    return (
        <div>
            {props.stats?.map(({ stat, base_stat }, index) => (
                <div 
                key={index}
                style={{display:'flex'}}
                >
                    <p>{stat.name}</p>
                    <p>{`:${base_stat}%`}</p>
                </div>
            ))}
        </div>
    )
}

export default PokeStats