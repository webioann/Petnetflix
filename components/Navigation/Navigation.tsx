'use client'
import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import Link from 'next/link'
import './navigation.scss'

const Navigation = () => {

    const {user} = useContext(UserContext)
    // slice user id and pass as params in MyListPage component (user_id it is document ref in Firebase store DB)
    const shorted_user_id = user?.user_id?.slice(0, 8)

    return (
        <nav className='nav'>
            <Link className='nav-link home-link' href={'/browse'}>Home</Link>
            <Link className='nav-link' href={'/tv_shows'}>TV Shows</Link>
            <Link className='nav-link' href={'/movies'}>Movies</Link>
            { user && <Link 
                className='nav-link'
                href={`/my_list/${shorted_user_id}`}>
                    My List
                </Link> 
            }
        </nav>
    )
}

export default Navigation;

