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
            <Link className='nav-link' href={'/browse/tv_shows'}>TV Shows</Link>
            <Link className='nav-link' href={'/browse/movies'}>Movies</Link>
            { user && <Link className='nav-link' href={'/my_list'}>My List</Link> }
        </nav>
    )
}

export default Navigation;

{/* <nav className='nav'>
<Link className={({isActive}) => isActive ? 'nav-link-active home-link' : 'nav-link home-link' } href={'/'}>Home</Link>
<Link className={({isActive}) => isActive ? 'nav-link-active' : 'nav-link' } href={'/tv_shows'}>TV Shows</Link>
<Link className={({isActive}) => isActive ? 'nav-link-active' : 'nav-link' } href={'/movies'}>Movies</Link>
{/* <Link className={({isActive}) => isActive ? 'nav-link-active' : 'nav-link' } href={'/latest'}>Latest</Link> */}
// { user && <Link className={({isActive}) => isActive ? 'nav-link-active' : 'nav-link' } href={'/my_list'}>My List</Link> }
// </nav> */}
