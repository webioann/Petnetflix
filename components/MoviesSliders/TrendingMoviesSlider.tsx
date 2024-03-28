// import React, { useState, useRef } from 'react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import MovieCard from '../MovieCard/MovieCard';
import fetchTrendingMoviesAndTvshows from '@/lib/fetchTrendingMoviesAndTvshows';
import './movies-slider.scss'

async function TrendingMoviesSlider() {

    const movies = await fetchTrendingMoviesAndTvshows('all')
    // console.log('MOVIES ----> ', movies)

    return (
        <section className='slider-container'>
            <h2 className='row-title'>Trending</h2>
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

export default TrendingMoviesSlider;