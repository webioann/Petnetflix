'use client'
import React, { useState, useEffect, ReactNode } from 'react'
import './header.scss'


const NavigationHeader = ({ children }: {children: ReactNode}) => {

    const [fadedNavbar, setFadedNavbar] = useState(true)

    const fadeNavbarBg = () => {
        if(window.scrollY > 70) {
            setFadedNavbar(false)
        }
        else {
            setFadedNavbar(true)
        } 
    }

    useEffect(() => {
        window.addEventListener('scroll', fadeNavbarBg)
        return () => {window.removeEventListener('scroll', fadeNavbarBg)}
    }, [])
    
    return (
        <section className={fadedNavbar ? 'navbar nav-faded' : 'navbar nav-black'}>
            <div className='nav-container'>
                <div className='navbar-wrapper'>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default NavigationHeader;
{/* <Container width='1600px'>
<div className='navbar-wrapper'>
    {children}
</div>
</Container> */}
