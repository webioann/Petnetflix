import React, { ReactNode } from 'react'
import Image from 'next/image'
import './register_pages.scss'
import AuthPageFooter from '../../components/AuthPageFooter/AuthPageFooter'
import image from '../../public/login_background.jpg'

async function EntryPointLayout ({ children }: {children: ReactNode}) {
    // const session = await getServerSession(authOptions)
    // if (session) redirect("/");
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

export default EntryPointLayout;