'use client'
import { Media_Type } from '../../types/video.types';
import Link from 'next/link'

import { FaPlay } from 'react-icons/fa'
import './buttons.scss'

type PlayVideoParam = {
    media_type: Media_Type
    movie_id: number
    variant: 'circle' | 'square'
}

const Button_PlayVideo: React.FC<PlayVideoParam> = ({ media_type, movie_id,variant }) => {

    // const media_type = 'tv'
    // const movie_id = 52814

    return (
        <Link 
            href={`/watch/${media_type}/${movie_id}`}
            className={ variant === 'circle' ? 'big-circle circle-button' : 'square-button' }
            >
            <FaPlay color='#fff' size={13} title='Play video'/>
            { variant === 'square' ? 'Play' : null}
        </Link>
    )
}

export default Button_PlayVideo;
// onClick={() => {console.log('SELECT AND START PLAY VIDEO')}}