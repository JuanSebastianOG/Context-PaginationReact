import { createContext, useState } from 'react';
export const CounterContext = createContext([[],() => {}]);

const MyProvider = ( props ) => {
    const [state, setState] = useState(1);
    return (
        <CounterContext.Provider value={[state, setState]}>
            {props.children}
        </CounterContext.Provider>
    );
}
export default MyProvider;
