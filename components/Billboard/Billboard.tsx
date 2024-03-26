import fetchBillboardData from "@/lib/fetchBillboardData"
import Image from "next/image"
import type { TrendingResponse, Response } from '@/types/trending.types'
import type { Media_Type } from '@/types/app.types'
import Container from "../Container/Container"
import { MdInfoOutline } from 'react-icons/md'
import Button_MoreInfo from "../ButtonsComponents/Button_MoreInfo"
import Button_PlayVideo from "../ButtonsComponents/Button_PlayVideo"
import Button_SaveInMyList from "../ButtonsComponents/Button_SaveInMyList"
import { genres_list } from '../../data/allGenresList' 
import './billboard.scss'

async function Biilboard({media_type}: {media_type: Media_Type}) {

    const data = await fetchBillboardData(media_type)
    // console.log('DATA NUMBER 22--> ', data)

    return (
        <section className='banner-container'>
            <Image 
                src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
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
                    <ul className='genres-list-row'>
                        {data.genre_ids.slice(0,3).map((item) => (
                            <li className='genre-item' key={item} >
                                <span className='dot'/>
                                <p>{ genres_list.filter((obj) => { return Number(obj.id) === item })[0].name }</p>
                            </li>
                        ))}
                    </ul>
                    <div className="banner-buttons-row">
                        <Button_PlayVideo videoParam={{movie_id: data.id, media_type: media_type}} variant='square'/>
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
