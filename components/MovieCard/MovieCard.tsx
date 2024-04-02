import Button_PlayVideo from '../ButtonsComponents/Button_PlayVideo'
import Button_VolumeOff from '../ButtonsComponents/Button_VolumeOff'
import Button_Like from '../ButtonsComponents/Button_Like'
import Button_Dislike from '../ButtonsComponents/Button_Dislike'
import Button_SaveInMyList from '../ButtonsComponents/Button_SaveInMyList'
import Button_DeleteFromMyList from '../ButtonsComponents/Button_DeleteFromMyList'
import GenresListRow from '../GenresList/GenresListRow'
import Image from "next/image"
import { IResultType, IMediaType } from '@/types/movies.types'
import './movie-card.scss'
import './static-card.scss'

type IMovieCardProps = {
    movie: IResultType
    media_type?: IMediaType
    useIn: 'slider' | 'my-list' | 'search'
}

const MovieCard = ({ movie, media_type, useIn }: IMovieCardProps) => {
    const is_movie = "title" in movie;

    if( useIn === 'slider' ) {  
        return (
            <li className='movie-card'>
                <Image 
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path ? movie.backdrop_path : movie.poster_path}`}
                    style={{objectFit: 'cover'}} 
                    width={290}
                    height={163}
                    priority 
                    alt={ is_movie ? movie.title : movie.name }
                />
                <div className='movie-card-controls'>
                    <div className='movie-controls-info'>
                        <Button_PlayVideo 
                            media_type={ media_type ? media_type : movie.media_type! } 
                            movie_id={movie.id} 
                            variant='circle'
                        />
                        <p className='movie-name'>
                            { is_movie ? movie.title : movie.name }
                        </p>
                        <GenresListRow genres={movie?.genre_ids} font_size={10}/>
                    </div>
                    <div className='movie-controls-buttons'>
                        <Button_VolumeOff icon_size={10}/>
                        <Button_Like icon_size={10}/>
                        <Button_Dislike icon_size={10}/>
                        <Button_SaveInMyList 
                            movie={movie} 
                            media_type={ media_type ? media_type : movie.media_type! } 
                            icon_size={10}
                        />
                    </div>
                </div>
            </li>
        )
    
    }
    if( useIn === 'search' ) {  
        return (
            <li className='static-card'>
                <Image 
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path ? movie.backdrop_path : movie.poster_path}`}
                    style={{objectFit: 'cover'}} 
                    width={375}
                    height={211}
                    priority 
                    alt={ is_movie ? movie.title : movie.name }
                />
                <div className='static-card-controls'>
                    <div className='static-controls-info'>
                        <Button_PlayVideo 
                            media_type={ media_type ? media_type : movie.media_type! } 
                            movie_id={movie.id} 
                            variant='circle'
                        />
                        <p className='static-name'>
                            { is_movie ? movie.title : movie.name }
                        </p>
                        <GenresListRow genres={movie?.genre_ids} font_size={14}/>
                    </div>
                    <div className='static-controls-buttons'>
                        <Button_VolumeOff icon_size={14}/>
                        <Button_Like icon_size={14}/>
                        <Button_Dislike icon_size={14}/>
                        <Button_SaveInMyList 
                            movie={movie} 
                            media_type={ media_type ? media_type : movie.media_type! } 
                            icon_size={14}
                        />
                    </div>
                </div>
            </li>
        )
    
    }
    if( useIn === 'my-list' ) {  
        return (
            <li className='static-card'>
                <Image 
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path ? movie.backdrop_path : movie.poster_path}`}
                    style={{objectFit: 'cover'}} 
                    width={375}
                    height={211}
                    priority 
                    alt={ is_movie ? movie.title : movie.name }
                />
                <div className='static-card-controls'>
                    <div className='static-controls-info'>
                        <Button_PlayVideo 
                            media_type={ media_type ? media_type : movie.media_type! } 
                            movie_id={movie.id} 
                            variant='circle'
                        />
                        <p className='static-name'>
                            { is_movie ? movie.title : movie.name }
                        </p>
                        <GenresListRow genres={movie?.genre_ids} font_size={14}/>
                    </div>
                    <div className='static-controls-buttons'>
                        <Button_VolumeOff icon_size={14}/>
                        <Button_Like icon_size={14}/>
                        <Button_Dislike icon_size={14}/>
                        <Button_DeleteFromMyList icon_size={14} movie_id_toString={movie.id.toString()}/>
                    </div>
                </div>
            </li>
        )
    
    }

}

export default MovieCard;
