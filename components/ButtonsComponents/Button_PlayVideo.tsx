'use client'
// import React, { useState, useEffect } from 'react'
import { IVideoParams } from '../../types/video.types';
import { FaPlay } from 'react-icons/fa'
import './buttons.scss'

type PlayVideoParam = {
    title?: string
    videoParam: IVideoParams
    variant: 'middle' | 'mega' | 'square'
}

const Button_PlayVideo: React.FC<PlayVideoParam> = ({ videoParam, title, variant }) => {
    // === button turning up player and send data for fetching data for video from server ===
    // const [parametres, setParametres] = useState({
    //     iconSize: 13,
    //     class: 'big-circle circle-button'
    // })

    // useEffect(() => {
    //     // three variants UI for reusable in app
    //     if( variant === 'square' ) {
    //         setParametres({
    //             iconSize: 13,
    //             class: 'square-button'
    //         }) 
    //     }
    //     if( variant === 'middle' ) {
    //         setParametres({
    //             iconSize: 13,
    //             class: 'big-circle circle-button'
    //         }) 
    //     }
    //     if( variant === 'mega' ) {
    //         setParametres({
    //             iconSize: 20,
    //             class: 'mega-circle circle-button'
    //         }) 
    //     }
    // }, [])

    return (
        <button 
            className='big-circle circle-button'
            onClick={() => {console.log('SELECT AND START PLAY VIDEO')}}>
            <FaPlay color='#fff' size={13} title='Play video'/>
            { title }
        </button>
    )
}

export default Button_PlayVideo;
// onClick={() => {
//     dispatch(selectMovie(videoParam))
//     dispatch(startPlayVideo())
// }}
