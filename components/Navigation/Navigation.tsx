'use client'
import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import Link from 'next/link'
import './navigation.scss'

const Navigation = () => {

    const {user} = useContext(UserContext)

    return (
        <nav className='nav'>
            <Link className='nav-link home-link' href={'/browse'}>Home</Link>
            <Link className='nav-link' href={'/tv_shows'}>TV Shows</Link>
            <Link className='nav-link' href={'/movies'}>Movies</Link>
            { user && <Link className='nav-link' href={'/my_list'}>My List</Link> }
        </nav>
    )
}

export default Navigation;

