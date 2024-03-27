import { genres_list } from '../../data/genresList'
import './genres-list-row.scss' 

function GenresListRow({genres}: {genres:  number[]}) {
    return (
        <ul className='genres-list-row'>
            {genres.slice(0,3).map((item) => (
                <li className='genre-item' key={item} >
                    <span className='dot'/>
                    <p>{ genres_list.filter((obj) => { return Number(obj.id) === item })[0].name }</p>
                </li>
            ))}
        </ul>    
    )
}

export default GenresListRow;