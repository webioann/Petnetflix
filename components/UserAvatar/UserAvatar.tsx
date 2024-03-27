'use client'
import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { USER_AVATAR } from '../../data/constants'
import Image from "next/image"

type userAvatarProps = {
    size: number
    radius: string
}

const UserAvatar: React.FC<userAvatarProps> = ({ size, radius }) => {

    const { user } = useContext(UserContext)

    return (
        <Image 
            style={{
                width: `${size}px`,
                height: `${size}px`,
                objectFit: 'cover',
                borderRadius: `${radius}`
            }}
            src={ user?.photoURL ? user?.photoURL : USER_AVATAR } alt="user avatar"/>
        )
}

export default UserAvatar;