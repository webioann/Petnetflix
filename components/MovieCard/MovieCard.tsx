import Button_PlayVideo from '../ButtonsComponents/Button_PlayVideo'
import Button_VolumeOff from '../ButtonsComponents/Button_VolumeOff'
import Button_Like from '../ButtonsComponents/Button_Like'
import Button_Dislike from '../ButtonsComponents/Button_Dislike'
import Button_SaveInMyList from '../ButtonsComponents/Button_SaveInMyList'
import GenresListRow from '../GenresList/GenresListRow'
import Image from "next/image"
import { IResultType, IMediaType } from '@/types/movies.types'
import './movie-card.scss'
import './static-card.scss'

type IMovieCardProps = {
    movie: IResultType
    media_type?: IMediaType
    scalable?: true
}

const MovieCard = ({ movie, media_type, scalable }: IMovieCardProps) => {
    const is_movie = "title" in movie;

    return (
        <li className={scalable ? 'movie-card' : 'static-card'}>
            <Image 
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path ? movie.backdrop_path : movie.poster_path}`}
                style={{objectFit: 'cover'}} 
                width={ scalable ? 290 : 375}
                height={scalable ? 163 : 211}
                priority 
                alt={ is_movie ? movie.title : movie.name }
            />
            <div className={scalable ? 'movie-card-controls' : 'static-card-controls'}>
                <div className={scalable ? 'movie-controls-info' : 'static-controls-info'}>
                    <Button_PlayVideo 
                        media_type={ media_type ? media_type : movie.media_type! } 
                        movie_id={movie.id} 
                        variant='circle'
                    />
                    <p className={scalable ? 'movie-name' : 'static-name'}>
                        { is_movie ? movie.title : movie.name }
                    </p>
                    <GenresListRow genres={movie?.genre_ids} font_size={scalable ? 10 : 14}/>
                </div>
                <div className={scalable ? 'movie-controls-buttons' : 'static-controls-buttons'}>
                    <Button_VolumeOff icon_size={scalable ? 10 : 14}/>
                    <Button_Like icon_size={scalable ? 10 : 14}/>
                    <Button_Dislike icon_size={scalable ? 10 : 14}/>
                    <Button_SaveInMyList 
                        movie={movie} 
                        media_type={ media_type ? media_type : movie.media_type! } 
                        icon_size={scalable ? 10 : 14}
                    />
                </div>
            </div>
        </li>
    )
}

export default MovieCard;
