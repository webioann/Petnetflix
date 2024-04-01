'use client'
import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { FaRegTrashCan } from "react-icons/fa6";import { db } from '../../firebase.config'
// import { doc, setDoc, deleteDoc, } from 'firebase/firestore'
// import { TotalMovieAndTvshowType, Media_Type, TrendingMoviesType } from '@/types/movies.types'
import { deletetMovieFromMyList } from '../../lib/myListMoviesAPI';
import './buttons.scss'

type buttonProp = {
    icon_size: number
    movie_id_toString: string
}

const  Button_SaveInMyList = ({icon_size, movie_id_toString}: buttonProp) =>{

    const { user } = useContext(UserContext)

    const deleteThisMovieFromMyList = async () => {
        const user_id = user?.user_id
        user_id && deletetMovieFromMyList({user_id, movie_id_toString})
    }

    return (
        <button 
            onClick={() => deleteThisMovieFromMyList()}
            style={{
                width: `${icon_size * 2}px`,
                height: `${icon_size * 2}px`,
                paddingLeft: `${icon_size / 6}px`
            }}
            className="circle-button">
            <i>
                <FaRegTrashCan size={icon_size} color='#fff' title='delete from My List ?'/> 
            </i>
        </button>
    )
}

export default Button_SaveInMyList
