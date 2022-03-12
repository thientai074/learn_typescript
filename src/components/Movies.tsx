import { Box, Button, Chip, PropTypes, TextField } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { ChangeEvent, useContext, useState } from 'react'
import {MovieContext} from '../contexts/MovieContext'
import { ThemeContext} from '../contexts/ThemeContext'
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		movieChip: {
			fontSize: '2rem',
			padding: '30px 10px',
			margin: '5px'
		},
		movieInput: {
			marginRight: '5px'
		}
	})
)

const Movies = () => {
    const classes = useStyles()

    const [movie, setMovie] = useState('')

    const onMovieInputChange  = (event: ChangeEvent<HTMLInputElement>) => {
        setMovie(event.target.value)
    }

    const { movies, addMovie, deleteMovie} = useContext(MovieContext)

    const { theme } = useContext(ThemeContext)
    const chipTheme = theme as Exclude<PropTypes.Color, 'inherit'>
    return (
        <div>
            <Box display="flex" justifyContent="center" my={5}>
                <TextField 
                    label='Your favourite movie ...'
                    variant='outlined'
                    value={movie}
                    className={classes.movieInput}
                    onChange={onMovieInputChange} 
                    />
                <Button 
                    variant='contained' 
                    color='primary'
                    onClick={() => {
                        addMovie(movie)
                        setMovie('')
                    }}>
                    Add
                </Button>
            </Box>
            <Box display='flex' justifyContent='center' flexWrap='wrap' mx={5}>
                {movies.map(movie =>(
                    <Chip 
                        key={movie.id}
                        label={movie.title}
                        clickable
                        color={chipTheme}
                        className={classes.movieChip}
                        onDelete={deleteMovie.bind(this, movie.id)}
                    />
                ))}                
            </Box>
        </div>
    )
}

export default Movies