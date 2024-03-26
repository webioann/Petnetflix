'use client'
import { IVideoParams } from '../../types/video.types';
import { FaPlay } from 'react-icons/fa'
import './buttons.scss'

type PlayVideoParam = {
    videoParam: IVideoParams
    variant: 'circle' | 'square'
}

const Button_PlayVideo: React.FC<PlayVideoParam> = ({ videoParam, variant }) => {

    return (
        <button 
            className={ variant === 'circle' ? 'big-circle circle-button' : 'square-button' }

            onClick={() => {console.log('SELECT AND START PLAY VIDEO')}}>

            <FaPlay color='#fff' size={13} title='Play video'/>
            { variant === 'square' ? 'Play' : null}
        </button>
    )
}

export default Button_PlayVideo;
