import { useReducer } from "react"
import AppContext from "./appContext"
import postReducer from "./postReducer"

const initialState = {
    posts: []
}

const AppState = ({ children }) => {
    const [state, dispatch] = useReducer(postReducer, initialState)
    return (
        <AppContext.Provider value={{
            posts: state.posts,
            dispatch
        }}>
            {children}
        </AppContext.Provider >
    )
}

export default AppState