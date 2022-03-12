import {TopMovieActionType} from './type'
interface TopMovie{
    imdbId: string
    Title: string
    Watched: boolean
}

export type TopMovieState = TopMovie[]

const {GET_TOP_MOVIES, TOGGLE_TOP_MOVIES_WATCHED} = TopMovieActionType

type TopMovieAction = | {
    type: typeof GET_TOP_MOVIES
    payload: TopMovie[]
} | {
    type: typeof TOGGLE_TOP_MOVIES_WATCHED
    payload: string
}

export const topMovieReducer = ( state: TopMovieState, action: TopMovieAction ) => {
    switch ( action.type ) {
        case GET_TOP_MOVIES:
            return action.payload

        case TOGGLE_TOP_MOVIES_WATCHED:
            return state.map(topMovie => topMovie.imdbId === action.payload ? { ...topMovie, Watched: !topMovie.Watched} : topMovie)
        default: 
            return state
            
    }
}