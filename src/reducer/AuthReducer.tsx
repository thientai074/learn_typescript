import {AuthActionType} from './type'
export interface AuthState {
    isAuthenticated: boolean,
    username: string
}

const { TOOGLE_AUTH} = AuthActionType

export interface AuthAction {
    type: AuthActionType
    payload: string
}
export const authReducer = (state: AuthState, action: AuthAction) => {
    switch (action.type) {
        case TOOGLE_AUTH: 
            return {
                ...state,
                isAuthenticated: !state.isAuthenticated,
                username: action.payload
            }
        default: 
            return state
    }

}