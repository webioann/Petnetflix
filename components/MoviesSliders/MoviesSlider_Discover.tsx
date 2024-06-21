import MovieCard from '../MovieCard/MovieCard'
import fetchDiscoverMoviesAndTvshows from '@/lib/fetchDiscoverMoviesAndTvshows'
import { IMediaType } from '@/types/movies.types'
import { movies_genres_list, tvshows_genres_list } from '@/data/genresList'
import './movies-slider.scss'

export interface IDiscoverMoviesProps {
    media_type: IMediaType
    genre_id: number
}

async function MoviesSlider_Discover({media_type, genre_id}: IDiscoverMoviesProps) {
    // movies slider with sort by genre
    const movies = await fetchDiscoverMoviesAndTvshows({media_type, genre_id})
    
    const findGenreNameById = (genre_id: number) => {
        let genre;
        if(media_type === 'movie') {
            const findedObj = movies_genres_list.find((item) => {return item.id === genre_id})
            findedObj && ( genre = findedObj.name )
        }
        if(media_type === 'tv') {
            const findedObj = tvshows_genres_list.find((item) => {return item.id === genre_id})
            findedObj && ( genre = findedObj.name )
        }
        return genre
    }
    const genre = findGenreNameById(genre_id);

    return (
        <section className='slider-container'>
            <h2 className='row-title'>{genre}</h2>
            <ul className="row-movies">
                { movies?.map(movie => ( <MovieCard movie={movie} key={movie.id} useIn='slider'/> ))}
            </ul>
        </section>
    )
}

export default MoviesSlider_Discover;
