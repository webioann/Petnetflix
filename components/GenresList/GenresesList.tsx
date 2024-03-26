'use client'
import React, { useState, useEffect } from 'react'
import { genres_list } from '../../data/allGenresList' 
import './genreses-list.scss'

type props = {
    genres: number[] 
    font: number
}

const GenresList = ({ genres }: {genres: number[]}) => {
    // component for output this movie genres in row with using dots for demarcation
    const [truncated, setTruncated ] = useState<number[] | []>([])

    useEffect(() => {
        if(genres) {
            if(genres.length > 3) {
                setTruncated(genres.slice(0,3))
            }
            else{ setTruncated([...genres])}
        }
        else return
    }, [])

    return (
        <ul className='genres-list-row'>
            {truncated.map((item) => (
                <li className='genre-item' key={item} >
                    <span className='dot'/>
                    <p>{ genres_list.filter((obj) => { return Number(obj.id) === item })[0].name }</p>
                </li>
            ))}
        </ul>
    )
}

export default GenresList;
 