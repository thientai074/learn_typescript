import {createContext, ReactNode, useReducer} from 'react';
import {topMovieReducer, TopMovieState} from '../reducer/TopMovieReducer'
import topMoviesInfo from '../api/getTopMovies'
import {TopMovieActionType} from '../reducer/type'

interface TopMoviecontextProps {
    children: ReactNode
}

interface TopMovieContextDefault {
    topMovies: TopMovieState
    getTopMovies: () => Promise<void>
    toggleWatched: (id: string) => void
}

const topMoviesDefault: TopMovieState = []

export const TopMovieContext = createContext<TopMovieContextDefault>({
    topMovies: topMoviesDefault,
    getTopMovies: () => Promise.resolve(void 0),
    toggleWatched: (id: string) => {}
})

const TopMovieContextProvider =  ({children}: TopMoviecontextProps) => {
    const [topMovies, dispatch] = useReducer(topMovieReducer, topMoviesDefault)
    const { GET_TOP_MOVIES, TOGGLE_TOP_MOVIES_WATCHED} = TopMovieActionType

    const getTopMovies = async () => {
        const topMovies = await Promise.all(topMoviesInfo)
        dispatch({
            type: GET_TOP_MOVIES,
            payload: topMovies.map(topMovie => ({ ...topMovie.data, Watched:false}))
        })        
    }

    const toggleWatched = (imdbId: string) => {
        dispatch({
            type: TOGGLE_TOP_MOVIES_WATCHED,
            payload: imdbId
        })
    }

    const topMovieContextData = {
        topMovies,
        getTopMovies,
        toggleWatched
    }
    return (
        <TopMovieContext.Provider value={topMovieContextData}>
            {children}
        </TopMovieContext.Provider>
    )

}

export default TopMovieContextProvider