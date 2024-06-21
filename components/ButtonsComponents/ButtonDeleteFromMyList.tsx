'use client'
import React, { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { UserContext } from '../../context/UserContext'
import { FaRegTrashCan } from "react-icons/fa6"
import { deletetMovieFromMyList } from '../../lib/myListMoviesAPI';
import './buttons.scss'

type buttonProp = {
    icon_size: number
    movie_id_toString: string
}

const  ButtonDeleteFromMyList = ({icon_size, movie_id_toString}: buttonProp) =>{
    // remove movie from MyList page and MY_LIST colection on Firebase
    const { user } = useContext(UserContext)
    const router = useRouter()

    const deleteThisMovieFromMyList = async () => {
        const user_id = user?.user_id
        user_id && await deletetMovieFromMyList({user_id, movie_id_toString})
        router.refresh()
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

export default ButtonDeleteFromMyList;
