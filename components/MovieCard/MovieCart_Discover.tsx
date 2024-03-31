import Button_PlayVideo from '../ButtonsComponents/Button_PlayVideo'
import Button_VolumeOff from '../ButtonsComponents/Button_VolumeOff'
import Button_Like from '../ButtonsComponents/Button_Like'
import Button_Dislike from '../ButtonsComponents/Button_Dislike'
import Button_SaveInMyList from '../ButtonsComponents/Button_SaveInMyList'
import GenresListRow from '../GenresList/GenresListRow'
import Image from "next/image"
import { IDiscoverMovie } from '@/types/discover.types'
import { Media_Type } from '@/types/discover.types'
import './movie-card.scss'

interface IMovieCard {
    movie: IDiscoverMovie
    media_type: Media_Type
}

const MovieCard_Discover = ({ movie, media_type }: IMovieCard) => {
    
    return (
        <li className='movie-card'>
            <Image 
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path ? movie.backdrop_path : movie.poster_path}`}
                style={{objectFit: 'cover'}} 
                width={290}
                height={163}
                priority 
                alt={ media_type ? movie.title : movie.original_title }
            />
            <div className="movie-card-controls">
                <div className="poster-controls-info">
                    <Button_PlayVideo media_type={media_type} movie_id={movie.id} variant='circle'/>
                    <p className='movie-name'>
                        { movie.title ? movie.title : movie.original_title }
                    </p>
                    <GenresListRow genres={movie?.genre_ids} font_size={10}/>
                </div>
                <div className="poster-controls-buttons">
                    <Button_VolumeOff icon_size={10}/>
                    <Button_Like icon_size={10}/>
                    <Button_Dislike icon_size={10}/>
                    <Button_SaveInMyList movie={movie} media_type={media_type}/>
                </div>
            </div>
        </li>
    )
}

export default MovieCard_Discover;
