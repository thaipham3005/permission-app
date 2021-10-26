import { authReducer } from '../../reducers/authReducer';
import { createContext, useReducer, useEffect, ReactNode, useState } from "react";

interface AuthContextDefault {
    isAuthenticated: boolean,
    user: string
}

const authContextDefaultData = {
    isAuthenticated: false,
    user: ''
}


export const AuthContext = createContext<AuthContextDefault>(authContextDefaultData)

type Actions =
    | {
        type: "SET_AUTH",
        payload: {
            isAuthenticated: boolean,
            user: string
        }
    } | {
        type: "MENU_VISIBLE",
        payload: {
            isAuthenticated: boolean,
            user: string
        }
    }


interface AuthContextProps {
    children: ReactNode
}

const AuthContextProvider = ({children}: AuthContextProps ) => {
    const [authState, setAuthState] = useState<AuthContextDefault>(authContextDefaultData)
    return <AuthContext.Provider value={authState}>
        {children}
    </AuthContext.Provider>
}



