'use client'
import { useRouter } from 'next/navigation'
import { IoClose } from 'react-icons/io5'
import './buttons.scss'

const Button_CloseVideo = () => {
    const router = useRouter()

    return (
        <div className='close-button'>
            <span onClick={() => router.back()} className='close-icon-box'>
                <IoClose color='red' size={25}/>
            </span>
        </div>
    )
}

export default Button_CloseVideo;
