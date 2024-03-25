'use client'
import React, { useContext } from 'react'
import Link  from 'next/link'
import { UserContext } from '../../context/UserContext'
import UserAvatar from '../UserAvatar/UserAvatar'
import SignOut_authButton from '../FirebaseAuthComonents/SignOut_authButton'
import { IoMdArrowDropdown } from 'react-icons/io'
import './user-profiles.scss'

const UserProfiles  = () => {
    // === user avatar with dropdown link on account and SignOut_Button ===
    const {user} = useContext(UserContext)

    return (
        <div className='user-profiles'>
            <div className="user-photo">
                <UserAvatar size={30} radius='4px'/>
                <IoMdArrowDropdown size={20} color='#fff'/>
            </div>
            <div className="dropdown-menu">
                <Link href={user ? '/account' : '/login'} className='account-link'>
                    {user ? 'Account' : 'Login page'}
                </Link>
                <SignOut_authButton/>
            </div>
        </div>
    )
}

export default UserProfiles;