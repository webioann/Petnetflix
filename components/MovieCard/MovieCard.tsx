import ButtonPlayVideo from '../ButtonsComponents/ButtonPlayVideo'
import ButtonVolumeOff from '../ButtonsComponents/ButtonVolumeOff'
import ButtonLike from '../ButtonsComponents/ButtonLike'
import ButtonDislike from '../ButtonsComponents/ButtonDislike'
import ButtonSaveInMyList from '../ButtonsComponents/ButtonSaveInMyList'
import ButtonDeleteFromMyList from '../ButtonsComponents/ButtonDeleteFromMyList'
import GenresListRow from '../GenresList/GenresListRow'
import Image from "next/image"
import { IResultType } from '@/types/movies.types'
import './movie-card.scss'
import './static-card.scss'

type IMovieCardProps = {
    movie: IResultType
    useIn: 'slider' | 'my-list' | 'search'
}

const MovieCard = ({ movie, useIn }: IMovieCardProps) => {
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
                        <ButtonPlayVideo 
                            media_type={ movie.media_type! } 
                            movie_id={movie.id} 
                            variant='circle'
                        />
                        <p className='movie-name'>
                            { is_movie ? movie.title : movie.name }
                        </p>
                        <GenresListRow genres={movie?.genre_ids} font_size={10}/>
                    </div>
                    <div className='movie-controls-buttons'>
                        <ButtonVolumeOff icon_size={10}/>
                        <ButtonLike icon_size={10}/>
                        <ButtonDislike icon_size={10}/>
                        <ButtonSaveInMyList 
                            movie={movie} 
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
                        <ButtonPlayVideo 
                            media_type={ movie.media_type } 
                            movie_id={movie.id} 
                            variant='circle'
                        />
                        <p className='static-name'>
                            { is_movie ? movie.title : movie.name }
                        </p>
                        <GenresListRow genres={movie?.genre_ids} font_size={14}/>
                    </div>
                    <div className='static-controls-buttons'>
                        <ButtonVolumeOff icon_size={14}/>
                        <ButtonLike icon_size={14}/>
                        <ButtonDislike icon_size={14}/>
                        <ButtonSaveInMyList 
                            movie={movie} 
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
                        <ButtonPlayVideo 
                            media_type={ movie.media_type } 
                            movie_id={movie.id} 
                            variant='circle'
                        />
                        <p className='static-name'>
                            { is_movie ? movie.title : movie.name }
                        </p>
                        <GenresListRow genres={movie?.genre_ids} font_size={14}/>
                    </div>
                    <div className='static-controls-buttons'>
                        <ButtonVolumeOff icon_size={14}/>
                        <ButtonLike icon_size={14}/>
                        <ButtonDislike icon_size={14}/>
                        <ButtonDeleteFromMyList icon_size={14} movie_id_toString={movie.id.toString()}/>
                    </div>
                </div>
            </li>
        )
    }
}

export default MovieCard;
