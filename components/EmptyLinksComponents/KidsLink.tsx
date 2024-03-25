import React from 'react'
import Link from 'next/link'
import './fake-links.scss'

const KidsLink = () => {
    // mock link button
    return (
        <Link 
            className='g-link fake-link' 
            style={{fontWeight: 400, fontSize: '0.8em'}}
            href={'#'}>
                KIDS
        </Link>
    )
}

export default KidsLink;