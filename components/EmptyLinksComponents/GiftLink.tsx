import React from 'react'
import Link from 'next/link'
import { BiGift } from 'react-icons/bi'
import './fake-links.scss'

const GiftLink = () => {
    // mock link button
    return (
        <Link href={'/gifts'} className='fake-link'>
            <BiGift  size={16} color='#fff'/>
        </Link>
    )
}

export default GiftLink;