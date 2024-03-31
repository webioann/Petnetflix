import Button_PlayVideo from '../ButtonsComponents/Button_PlayVideo'
import Button_VolumeOff from '../ButtonsComponents/Button_VolumeOff'
import Button_Like from '../ButtonsComponents/Button_Like'
import Button_Dislike from '../ButtonsComponents/Button_Dislike'
import Button_SaveInMyList from '../ButtonsComponents/Button_SaveInMyList'
import GenresListRow from '../GenresList/GenresListRow'
import Image from "next/image"
import { MovieOrTvshowType } from '@/types/trending.types'
import './search-card.scss'

const MovieCard_Searching = ( {movie}: {movie: MovieOrTvshowType}) => {
    
    return (
        <li className='search-card'>
            <Image 
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path ? movie.backdrop_path : movie.poster_path}`}
                style={{objectFit: 'cover'}} 
                width={375}
                height={211}
                priority 
                alt={ movie.media_type === 'movie' ? movie.title : movie.name }
            />
            <div className="search-card-controls">
                <div className="poster-controls-info">
                    <Button_PlayVideo media_type={movie.media_type} movie_id={movie.id} variant='circle'/>
                    <p className='movie-name'>
                        { movie.media_type === 'movie' ? movie.title : movie.name }
                    </p>
                    <GenresListRow genres={movie?.genre_ids} font_size={14}/>
                </div>
                <div className="poster-controls-buttons">
                    <Button_VolumeOff icon_size={14}/>
                    <Button_Like icon_size={14}/>
                    <Button_Dislike icon_size={14}/>
                    <Button_SaveInMyList movie={movie} media_type={movie.media_type} icon_size={14}/>
                </div>
            </div>
        </li>
    )
}

export default MovieCard_Searching;