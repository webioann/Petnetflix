import React, { ReactNode } from 'react'
import Image from 'next/image'
import styles from './entry_point.module.scss'
import AuthPageFooter from '../../components/AuthPageFooter/AuthPageFooter'
import image from '../../public/login_background.jpg'

async function EntryPointLayout ({ children }: {children: ReactNode}) {
    // const session = await getServerSession(authOptions)
    // if (session) redirect("/");
    return (
        <main className={styles.container}>
            <Image 
                src={image}
                className={styles.bg_image} 
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