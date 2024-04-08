import React, { ReactNode } from 'react'
import Image from 'next/image'
import AuthPageFooter from '../../components/AuthPageFooter/AuthPageFooter'
import image from '../../public/login_background.jpg'
import './register_pages.scss'

async function RegisterLayout ({ children }: {children: ReactNode}) {

    return (
        <main className='container'>
            <Image 
                src={image}
                className='bg-image' 
                alt='page bg'
                priority 
                fill
            />
            {children}
            <AuthPageFooter/>
        </main>
    )
}

export default RegisterLayout;