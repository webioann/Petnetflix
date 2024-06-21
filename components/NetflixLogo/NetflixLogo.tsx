import Link from 'next/link'
import Image from "next/image"
import './netflix-logo.scss'

const NetflixLogo = () => {
    const LOGO_BIG = 
        'https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png';
    // logo mobile
    const LOGO_MOBILE= 
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/551px-Netflix_2015_N_logo.svg.png';
    
    return (
        <>
            <Link href={'/'} className='netflix-logo'>
                {/* logo for screens more 640px */}
                <Image 
                    className='logo logo-big'
                    width={100}
                    height={30} 
                    src={LOGO_BIG} 
                    alt="Netflix logo"/>
                {/* logo for mobile screens ( less 640px )*/}
                <Image 
                    className='logo logo-mobile'
                    width={24} 
                    height={40}
                    src={LOGO_MOBILE} 
                    alt="Netflix logo"/>
            </Link> 
        </> 
    )
}

export default NetflixLogo;
