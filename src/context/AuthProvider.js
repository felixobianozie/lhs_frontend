/**
 * Provides a global auth state
 */
import { createContext, useState } from "react"

const AuthContext = createContext({});

// Parent component to provide auth state to all children
export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({})

    return(
        <AuthContext.Provider value={{ auth, setAuth}}>
            { children }
        </AuthContext.Provider>

    )
}

export default AuthContext