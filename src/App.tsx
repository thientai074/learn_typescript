import Navbar from '../src/components/Navbar'
import ProgressContextProvider from './contexts/ProgressContext';
import './App.css';
import ThemeContextProvider from './contexts/ThemeContext';
import ToogleThemeBtn from './components/ToogleThemeBtn';
import MovieContextProvider from './contexts/MovieContext';
import AuthContextProvider from './contexts/AuthContext'
import Movies from './components/Movies'
import { Grid } from '@material-ui/core'
import TopMovies from './components/TopMovies'
import TopMovieContextProvider from './contexts/TopMovieContext';

function App() {
  return (
    <div>
      
			<AuthContextProvider>
				<TopMovieContextProvider>
					<MovieContextProvider>
						<ThemeContextProvider>
							<ProgressContextProvider>
								<Navbar />
								<Grid container>
									<Grid item xs={4}>
										<TopMovies />
									</Grid>
									<Grid item xs={8}>
										<Movies />
									</Grid>
								</Grid>
								<ToogleThemeBtn />
							</ProgressContextProvider>
						</ThemeContextProvider>
					</MovieContextProvider>
				</TopMovieContextProvider>
			</AuthContextProvider>
    </div>  
  );
}

export default App;
