import getTrailerVideoURL from '@/lib/getTrailerVideoURL'
import { IMediaType } from '../../../types/movies.types'
import Button_CloseVideo from '@/components/ButtonsComponents/Button_CloseVideo'
import image from '../../../public/login_background.jpg'
import Image from 'next/image'
import './watch-page.scss'

type VideoParams = {
    video: [ IMediaType, number ]
}

async function WatchPage({params}: {params: VideoParams}) {
    const media_type = params.video[0]
    const movie_id = params.video[1]
    const url = await getTrailerVideoURL(media_type, movie_id)
    // console.log('TRAILER ==> ', url)

    return (
        <main className="watch-page">
            <Image 
                src={image}
                className='bg-image'
                alt='page bg'
                priority 
                fill
            />
            <div className='watch-content'>
                <Button_CloseVideo/>
                <div className='video-player'>
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${url}?autoplay=1`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Youtube trailer"
                    />  
                </div>
            </div>
        </main>
    )
}

export default WatchPage;