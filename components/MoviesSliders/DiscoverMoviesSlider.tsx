import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import MovieCard_Discover from '../MovieCard/MovieCart_Discover'
import fetchDiscoverMoviesAndTvshows from '@/lib/fetchDiscoverMoviesAndTvshows'
import { MovieOrTvshowType } from '@/types/trending.types'
import { Media_Type } from '@/types/discover.types'
import { movies_genres_list, tvshows_genres_list } from '@/data/genresList'
import './movies-slider.scss'

export interface IDiscoverMoviesProps {
    media_type: Media_Type
    genre_id: number
}

async function DiscoverMoviesSlider({media_type, genre_id}: IDiscoverMoviesProps) {



    const movies = await fetchDiscoverMoviesAndTvshows({media_type, genre_id})
    console.log('DISCOVER MOVIES ----> ', movies)

    return (
        <section className='slider-container'>

            <h2 className='row-title'>Discover</h2>
            
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

export default DiscoverMoviesSlider;
    // const findGenreIdByName = async (genre: string) => {
    //     let genre_id;
    //     if(media_type === 'movie') {
    //         const findedObj = movies_genres_list.find((item) => {item.name === genre})
    //         findedObj && ( genre_id = findedObj.id )
    //     }
    //     if(media_type === 'tv') {
    //         const findedObj = tvshows_genres_list.find((item) => {item.name === genre})
    //         findedObj && ( genre_id = findedObj.id )
    //     }
    //     return genre_id
    // }
    // const genre_id = await findGenreIdByName(genre)
    // console.log(genre_id)
