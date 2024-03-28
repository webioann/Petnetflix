import fetchBillboardData from "@/lib/fetchBillboardData"
import Image from "next/image"
import type { Full_Media_Types } from '@/types/trending.types'
import Container from "../Container/Container"
import { MdInfoOutline } from 'react-icons/md'
import Button_MoreInfo from "../ButtonsComponents/Button_MoreInfo"
import Button_PlayVideo from "../ButtonsComponents/Button_PlayVideo"
import Button_SaveInMyList from "../ButtonsComponents/Button_SaveInMyList"
import GenresListRow from "../GenresList/GenresListRow" 
import './billboard.scss'

async function Biilboard({media_type}: {media_type: Full_Media_Types}) {

    const data = await fetchBillboardData(media_type) 
    // console.log('DATA NUMBER 22--> ', data.id, data.media_type)

    return (
        <section className='banner-container'>
            <Image 
                src={`https://image.tmdb.org/t/p/original/${data.backdrop_path ? data.backdrop_path : data.poster_path}`}
                style={{objectFit: 'cover'}} 
                fill
                priority 
                alt="Banner image"
            />
            <Container width='1400'>
                <div className="banner-content">
                    <h1 className='movie-name'>{ data.media_type === 'movie' ? data.title : data.name}</h1>
                    <p className='movie-overview'>
                        { data.overview.length > 150 ? data.overview.substring(0, 150 - 1) + ' ...' : data.overview }
                    </p> 
                    <GenresListRow genres={data.genre_ids} font_size={16}/>
                    <div className="banner-buttons-row">
                        <Button_PlayVideo media_type={data.media_type} movie_id={data.id} variant='square'/>
                        <Button_SaveInMyList title='My List' movie={data} />
                        <Button_MoreInfo/>
                        <div className="spring-div" style={{ flex: 1 }}/> 
                    </div>
                </div>
            </Container>
            <div className="black-fog"/>
        </section>    
    )
}

export default Biilboard;
