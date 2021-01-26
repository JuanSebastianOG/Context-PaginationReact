import React, { useContext } from 'react'
import { CounterContext } from './CounterConext';

function ConttentCounter() {
    const [state,setState] = useContext(CounterContext);
    const handleClick = (event) => {
        setState(state => state + 1)
    }
    return (
        <div className="" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Counter: {state}</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default ConttentCounter
