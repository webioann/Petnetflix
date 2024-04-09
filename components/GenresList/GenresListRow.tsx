import { genres_list } from '../../data/genresList'
import './genres-list-row.scss' 

function GenresListRow({genres, font_size}: {genres:  number[], font_size: number}) {
    
    return (
        <ul className='genres-row'
            style={{
                display: 'flex',
                gap: `${font_size / 2}px`,
                fontSize: `${font_size}px`,
                paddingTop: `${font_size / 2}px`,
            }}
            >
            {genres.slice(0, 3).map((item) => (
                <li className='genre-item'
                    style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    key={item} >
                    <span style={{
                        width: `${font_size / 3}px`,
                        height: `${font_size / 3}px`,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        marginRight: `${font_size / 2}px`
                    }}/>
                    <p>{ genres_list.filter((obj) => { return Number(obj.id) === item })[0].name }</p>
                </li>
            ))}
        </ul>
    )
}

export default GenresListRow;