'use client'
import React, { useContext } from 'react'
import SignOut_authButton from '../FirebaseAuthComonents/SignOut_authButton'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { UserContext } from '@/context/UserContext'
import './navbar.scss'

function Navbar() {

    const router = useRouter()
    const user = useContext(UserContext)
    console.log('USER ---> ', user)

    // const postData = {
    //     text: 'Hello Jozzy',
    //     username: 'Jozzy',
    //     desc: '---description---',
    //     image: 'https://pixlr.com/images/index/ai-image-generator-three.webp'
    // }

    // const saveData = async () => {
    //     const res = await fetch('/api/posts', {
    //         method: 'POST',
    //         body: JSON.stringify({postData}),
    //         headers: {
    //             "Content-type": "application/json",
    //         },
    //     })
    //     if(!res.ok) { throw new Error('Failed to send posts') }
    //     router.push('/api/posts')
    // }

    return (
        <div>Navbar
            user && <SignOut_authButton/>
            <Link href={'/signup'}>Sign Up</Link>
            <Link href={'/login'}>Log in</Link>
            <Link href={'/api/auth/signin'}>SIGNIN</Link>
            {/* <button onClick={saveData} className='button'>SAVE DATA ON SERVER</button> */}
        </div>
    )
}

export default Navbar