// import React from 'react'
import { IoClose } from 'react-icons/io5'
import './buttons.scss'

type CloseVideoButtonProps = {
    color: string
    size: number
}

const Button_CloseVideo: React.FC<CloseVideoButtonProps> = ({color, size}) => {
    // only to close video player
    return (
        <div className='close-button'>
            <span className='close-icon-box'
                onClick={() => console.log('CLOSE VIDEO BUTTON')}>
                <IoClose color={color} size={size}/>
            </span>
        </div>
    )
}

export default Button_CloseVideo;
