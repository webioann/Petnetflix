'use client'
import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import Image from "next/image"

type userAvatarProps = {
    size: number
    radius: string
}

const UserAvatar: React.FC<userAvatarProps> = ({ size, radius }) => {
    const USER_AVATAR = 
        'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png';

    const { user } = useContext(UserContext)

    return (
        <Image 
            style={{
                objectFit: 'cover',
                borderRadius: `${radius}`
            }}
            src={ user?.photoURL ? user?.photoURL : USER_AVATAR }
            width={size} 
            height={size}
            alt="user avatar"/>
        )
}

export default UserAvatar;