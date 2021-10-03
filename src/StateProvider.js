// set up the data layer

import { createContext, useReducer, useContext } from "react";

// we need this to track the busket
// this is the data layer
export const StateContext = createContext();
// build a state provider 
export const StateProvider = ({reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)
// now this state provider should be warp around the app component

// this is how we use inside the component
export const useStateValue = () => useContext(StateContext)

