import {
	Box,
	Card,
	CardContent,
	CardHeader,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Checkbox
} from '@material-ui/core'
import { useContext, useEffect } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import {TopMovieContext} from '../contexts/TopMovieContext'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		topMoviesHeader: {
			paddingBottom: 0
		},
		topMoviesList: {
			paddingTop: 0
		},
		topMovieItem: {
			paddingTop: '2px',
			paddingBottom: '2px'
		}
	})
)

const TopMovies = () => {

    const classes = useStyles()

    const {topMovies, getTopMovies, toggleWatched} = useContext(TopMovieContext)

    useEffect(() => {
        getTopMovies()
    }, [])
    return (
        <Box mt={1} ml={2}>
            <Card raised>
                <CardHeader 
                    title='Top 10 movies of all time'
                    className={classes.topMoviesHeader}
					titleTypographyProps={{
						variant: 'h4',
						align: 'center',
						color: 'primary'
					}}></CardHeader>
                    <CardContent>
                        <List>
                            {topMovies.map(movie => (
                                 <ListItem key={movie.imdbId} button className={classes.topMoviesList} >
                                 <ListItemIcon>
                                     <Checkbox checked={movie.Watched} onClick={toggleWatched.bind(this, movie.imdbId)} />
                                 </ListItemIcon>
                                     <ListItemText primary={movie.Title} />
                             </ListItem> ))}                           
                        </List>
                    </CardContent>

            </Card>
        </Box>
    )
}

export default TopMovies