import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import MovieCard_Discover from '../MovieCard/MovieCart_Discover'
import fetchDiscoverMoviesAndTvshows from '@/lib/fetchDiscoverMoviesAndTvshows'
import { Media_Type } from '@/types/movies.types'
import { movies_genres_list, tvshows_genres_list } from '@/data/genresList'
import './movies-slider.scss'

export interface IDiscoverMoviesProps {
    media_type: Media_Type
    genre_id: number
}

async function MoviesSlider_Discover({media_type, genre_id}: IDiscoverMoviesProps) {

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
                { movies?.map(movie => ( <MovieCard_Discover movie={movie} media_type={media_type} key={movie.id}/> ))}
            </ul>
            <div className="arrow-icons-wrapper">
                {/* <SlArrowLeft className={ isMoved ? 'arrow' : 'hidden-arrow' }
                    onClick={() => onArrowClick('left')}
                    size={30}
                    color='#fff' 
                />
                <SlArrowRight className={ rightSliderEnd ? 'hidden-arrow' : 'arrow' }
                    onClick={() => onArrowClick('right')} 
                    size={30}
                    color='#fff' 
                /> */}
            </div>
        </section>
    )
}

export default MoviesSlider_Discover;
