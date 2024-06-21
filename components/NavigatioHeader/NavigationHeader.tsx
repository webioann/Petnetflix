'use client'
import React, { useState, useEffect, ReactNode } from 'react'
import Container from '@/components/Container/Container'
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
    // when start scroll add black background for navbar
    useEffect(() => {
        window.addEventListener('scroll', fadeNavbarBg)
        return () => {window.removeEventListener('scroll', fadeNavbarBg)}
    }, [])
    
    return (
        <section className={fadedNavbar ? 'navbar nav-faded' : 'navbar nav-black'}>
            <Container width={1400}>
                <div className='navbar-wrapper'>
                    {children}
                </div>
            </Container>
        </section>
    )
}

export default NavigationHeader;
