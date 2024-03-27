import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import { LOGO_BIG, LOGO_MOBILE } from '../../data/constants'
import './netflix-logo.scss'

const NetflixLogo = () => {

    return (
    <>
        <Link href={'/'} className='netflix-logo'>
            <Image className='logo logo-big' src={LOGO_BIG} alt="Netflix logo"/>
            <Image className='logo logo-mobile' src={LOGO_MOBILE} alt="Netflix logo"/>
        </Link> 
    </> 
    )
}

export default NetflixLogo;
