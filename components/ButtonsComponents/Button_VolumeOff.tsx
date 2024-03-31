import React from 'react'
import { HiVolumeOff } from 'react-icons/hi'
import './buttons.scss'

type buttonProp = {
    icon_size: number
}

const Button_VolumeOff = ({icon_size}: buttonProp) => {
    // mock link button
    return (
        <button 
            style={{
                width: `${icon_size * 2}px`,
                height: `${icon_size * 2}px`,
                paddingLeft: `${icon_size / 4}px`
            }}
            className="small-circle circle-button">
            <HiVolumeOff size={icon_size} color='#fff'/>
        </button>
    )
}

export default Button_VolumeOff;