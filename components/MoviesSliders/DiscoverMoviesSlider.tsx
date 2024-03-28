import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import MovieCard from '../MovieCard/MovieCard';
import fetchDiscoverMoviesAndTvshows from '@/lib/fetchDiscoverMoviesAndTvshows';
import './movies-slider.scss'

async function DiscoverMoviesSlider() {

    const movies = await fetchDiscoverMoviesAndTvshows('tv')
    console.log('MOVIES ----> ', movies)

    return (
        <section className='slider-container'>

            <h2 className='row-title'>Discover</h2>
            
            <ul className="row-movies">
                { movies?.map(movie => ( <MovieCard movie={movie} key={movie.id}/> ))}
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