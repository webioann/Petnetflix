import getTrailerVideoURL from '@/lib/getTrailerVideoURL'
import { Media_Type } from '../../../types/video.types'
import { IoClose } from 'react-icons/io5'
import Link from 'next/link'
import './watch-page.scss'

type VideoParams = {
    video: [ Media_Type, number ]
}

async function WatchPage({params}: {params: VideoParams}) {
    const media_type = params.video[0]
    const movie_id = params.video[1]
    const url = await getTrailerVideoURL(media_type, movie_id)

    return (
        <main className="watch-page">
            <div className='watch-content'>
                {/* TODO:  make redirect to last page*/}
                <Link href={'/browse'} className='close-button'>
                    <span className='close-icon-box'>
                        <IoClose  color='red' size={30}/>
                    </span>
                </Link>
                <div className='video-player'>
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${url}?autoplay=1`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />  
                </div>
            </div>
        </main>
    )
}

export default WatchPage;