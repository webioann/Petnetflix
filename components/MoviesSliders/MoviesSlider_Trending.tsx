// 'use client'
// import React, { useState, useRef } from 'react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import MovieCard from '../MovieCard/MovieCard';
import fetchTrendingMoviesAndTvshows from '@/lib/fetchTrendingMoviesAndTvshows';
import { Full_Media_Types } from '@/types/movies.types';
import './movies-slider.scss'

type trendingSliderProp = {
    media_type: Full_Media_Types
}

async function MoviesSlider_Trending({media_type}: trendingSliderProp) {

    const movies = await fetchTrendingMoviesAndTvshows(media_type)
    // console.log('TRENDING ----> ', movies)
    // const carouselRef = useRef<HTMLUListElement>(null)
    // const [isMoved, setIsMoved] = useState(false)
    // const [rightSliderEnd, setRightSliderEnd] = useState(false)

    // const onArrowClick = (direct: 'left' | 'right') => {
    //     const width: number = 290;
    //     if( carouselRef.current && movies) {
    //         setIsMoved(true)
    //         const { scrollLeft, clientWidth, getBoundingClientRect } = carouselRef.current
    //         const scrollTo = direct === 'left' ? scrollLeft - clientWidth - width : scrollLeft + clientWidth - width
    //         carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    //         if(scrollLeft + clientWidth === movies.length * (width + 2 + 2) + 20 * 2) {
    //             setRightSliderEnd(true)
    //         }
    //     }
    // }

    return (
        <section className='slider-container'>
            <h2 className='row-title'>Trending</h2>
            <ul className="row-movies">
                { movies?.map(movie => ( <MovieCard movie={movie} key={movie.id} useIn='slider'/> ))}
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

export default MoviesSlider_Trending;