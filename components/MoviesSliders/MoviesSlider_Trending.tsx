import MovieCard from '../MovieCard/MovieCard';
import fetchTrendingMoviesAndTvshows from '@/lib/fetchTrendingMoviesAndTvshows';
import { Full_Media_Types } from '@/types/movies.types';
import './movies-slider.scss'

type trendingSliderProp = {
    media_type: Full_Media_Types
}

async function MoviesSlider_Trending({media_type}: trendingSliderProp) {
    // trending movies slider (without genres)
    const movies = await fetchTrendingMoviesAndTvshows(media_type)

    return (
        <section className='slider-container'>
            <h2 className='row-title'>Trending</h2>
            <ul className="row-movies">
                { movies?.map(movie => ( <MovieCard movie={movie} key={movie.id} useIn='slider'/> ))}
            </ul>
        </section>
    )
}

export default MoviesSlider_Trending;