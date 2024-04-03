'use client'
import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import { saveMovieInMyList } from '../../lib/myListMoviesAPI'
import { FaPlus, FaCheck } from 'react-icons/fa6'
import { IMediaType, IResultType } from '@/types/movies.types'
import './buttons.scss'

interface ISaveMovieInMyList {
    movie: IResultType
    media_type: IMediaType
    title?: string
    icon_size: number
}

const  ButtonSaveInMyList = ({ movie, title, media_type, icon_size }: ISaveMovieInMyList) =>{

    const [isSaved, setIsSaved] = useState(false)
    // const [tooltipTitle, setTooltipTitle] = useState('login for save this movie in My List')
    const { user } = useContext(UserContext)

    const saveMovie = async() => {
        if(user?.user_id) {
            const user_id = user?.user_id
            await saveMovieInMyList({user_id, movie})
            setIsSaved(true)
        }
    }

    if(title) {
        return (
            <button 
                onClick={() => saveMovie()}
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
                onClick={() => saveMovie()}
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

export default ButtonSaveInMyList;
