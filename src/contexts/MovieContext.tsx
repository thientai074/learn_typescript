import { createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid'

interface MovieContextProps {
    children: any
}

interface Movie {
    id: string
    title: string
}

interface MovieContextDefault {
    movies: Movie[]
    addMovie: (title: string) => void
    deleteMovie: (id: string) => void
}

const MovieContextDefaultData = {
    movies: [],
    addMovie: () => {},
    deleteMovie: () => {}
}

export const MovieContext = createContext<MovieContextDefault>(MovieContextDefaultData)

const MovieContextProvider = ({ children}: MovieContextProps) => {
    const [ movies, setMovies] = useState<Movie[]>(MovieContextDefaultData.movies)

    const addMovie = (title: string) => setMovies([...movies, {id: uuidv4(), title}])

    const deleteMovie = (id: string) => setMovies(movies.filter(movie => movie.id !== id))

    const MovieContextData ={
        movies,
        addMovie,
        deleteMovie
    }
    
    return (
        <MovieContext.Provider value={MovieContextData} >
            {children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider