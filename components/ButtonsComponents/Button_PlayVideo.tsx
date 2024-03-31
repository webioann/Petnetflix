'use client'
import { Media_Type } from '../../types/movies.types'
import { useRouter } from 'next/navigation'
import { FaPlay } from 'react-icons/fa'
import './buttons.scss'

type PlayVideoParam = {
    media_type: Media_Type
    movie_id: number
    variant: 'circle' | 'square'
}

const Button_PlayVideo: React.FC<PlayVideoParam> = ({ media_type, movie_id, variant }) => {

    const router = useRouter()
    
    const passParamsAndStartVideo = () => {
        router.push(`/watch/${media_type}/${movie_id}`)
    }

    return (
        <button 
            onClick={passParamsAndStartVideo}
            className={ variant === 'circle' ? 'big-circle circle-button' : 'square-button' }
            >
            <FaPlay color='#fff' size={14} title='Play video'/>
            { variant === 'square' ? 'Play' : null}
        </button>
    )
}

export default Button_PlayVideo;
