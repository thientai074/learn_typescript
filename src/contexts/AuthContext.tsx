import { ReactNode, createContext, useReducer} from 'react'
import { authReducer, AuthState } from '../reducer/AuthReducer'
import { AuthActionType  } from '../reducer/type'

interface AuthContextProps {
    children: ReactNode
}

interface AuthContextDefault {
    authInfo: AuthState
    toogleAuth: (username: string) => void
}

const { TOOGLE_AUTH} = AuthActionType

const authDefault = {
    isAuthenticated: false,
    username: ''
}
export const AuthContext = createContext<AuthContextDefault>({
    authInfo: authDefault,
    toogleAuth: () => null
})

const AuthContextProvider = ({children}: AuthContextProps) => {
    const [authInfo, dispatch ] = useReducer(authReducer, authDefault)

    const toogleAuth = (username: string) => {
        console.log(username)
        dispatch({
            type: TOOGLE_AUTH,
            payload: username
        })
    }

    const AuthContextData = {
        toogleAuth, 
        authInfo
    }
    return (
        <AuthContext.Provider value={AuthContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider 