import React, { useContext } from 'react'
import { CounterContext } from './CounterConext'

function Navbar() {
    const [state] = useContext(CounterContext);

    return (

        <div className="navbar" style={{ backgroundColor: '#23689b', width: '100vw', height: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Navbar counter: {state}</h1>
        </div>

    )
}

export default Navbar
