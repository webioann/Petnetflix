'use client'
import React from 'react'
import SignOut_authButton from '../FirebaseAuthComonents/SignOut_authButton'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
// import { useSession } from 'next-'
import './navbar.scss'

function Navbar() {
    // const { data: auth } = useSession()
    // console.log(auth)

    const router = useRouter()

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
            <SignOut_authButton/>
            <Link href={'/signup'}>Sign Up</Link>
            <Link href={'/login'}>Log in</Link>
            <Link href={'/api/auth/signin'}>SIGNIN</Link>
            {/* <button onClick={saveData} className='button'>SAVE DATA ON SERVER</button> */}
        </div>
    )
}

export default Navbar