'use client'
import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import { FaPlus, FaCheck } from 'react-icons/fa6'
import { db } from '../../firebase.config'
import { doc, setDoc } from 'firebase/firestore'
import { IDiscoverMovie } from '@/types/discover.types'
import { Media_Type } from '@/types/discover.types'
import type { TrendingResponse, MovieOrTvshowType } from '@/types/trending.types'
import './buttons.scss'

interface ISaveMovieInMyList {
    movie: MovieOrTvshowType | IDiscoverMovie
    media_type: Media_Type
    title?: string
    icon_size: number
}
interface IParamsOnSave {
    movie: MovieOrTvshowType | IDiscoverMovie
}

const  Button_SaveInMyList = ({ movie, title, media_type, icon_size }: ISaveMovieInMyList) =>{

    const [isSaved, setIsSaved] = useState(false)
    // const [tooltipTitle, setTooltipTitle] = useState('login for save this movie in My List')
    const { user } = useContext(UserContext)

    const saveMovieInMyList = async({ movie }: IParamsOnSave) => {
        if(user?.user_id && movie) {
            let movie_id = movie.id.toString()
            const docRef = `MY_LIST_${user?.user_id.slice(0, 8)}`
            await setDoc( doc(db, docRef, movie_id), movie )
            setIsSaved(true)
        }
    }

    if(title) {
        return (
            <button 
                onClick={() => saveMovieInMyList({movie})}
                className='square-button'
                >
                <i>{ isSaved && user
                    ? <FaCheck size={18} color='#fff' title='this movie saved in My List'/> 
                    : <FaPlus size={18} color='#fff' title='save in My List'/>}
                </i>
                { title }
            </button>
        )
    }
    else {
        return (
            <button 
                onClick={() => saveMovieInMyList({movie})}
                style={{
                    width: `${icon_size * 2}px`,
                    height: `${icon_size * 2}px`,
                }}
                className='small-circle circle-button'
                >
                <i>{ isSaved && user
                    ? <FaCheck size={icon_size} color='#fff' title='this movie saved in My List'/> 
                    : <FaPlus size={icon_size} color='#fff' title='save in My List'/>}
                </i>
            </button>
        )
    }
}

export default Button_SaveInMyList
