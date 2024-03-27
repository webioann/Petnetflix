'use client'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai'
import { db } from '../../firebase.config'
import { doc, setDoc } from 'firebase/firestore'
// import { IMovie } from '../../types/movies.types'
import type { TrendingResponse, MovieOrTvshowType } from '@/types/trending.types'

import './buttons.scss'

interface ISaveMovieInMyList {
    movie: MovieOrTvshowType
    title?: string
}
interface IParamsOnSave {
    movie: MovieOrTvshowType
}

const Button_SaveMovieInMyList: React.FC<ISaveMovieInMyList> = ({ movie, title }) => {
    const isSaved = false

    // const [isSaved, setIsSaved] = useState(false)
    // const [tooltipTitle, setTooltipTitle] = useState('login for save this movie in My List')
    const { user } = useContext(UserContext)

    // useEffect(() => {
    //     if( user?.email ) {
    //         let userList = user?.email?.toString()
    //         const list = localStorage.getItem(userList)
    //         setTooltipTitle('click for save in My List')
    //         if( list ) {
    //             let data: MovieOrTvshowType[] = JSON.parse(list)
    //             setIsSaved(data.some((item) => item.id === movie.id))
    //         }
    //         else{ setIsSaved(false) }
    //     }
    //     else{ setTooltipTitle('login for save this movie in My List') }
    // })

    const saveMovieInMyList = async ({ movie }: IParamsOnSave) => {
        if(user?.email && movie) {
            let id = movie.id.toString()
            let userList = user?.email?.toString()
            const list = localStorage.getItem(userList)
            await setDoc( doc(db, userList, id), movie )
            // setIsSaved(true)
            if( list ) {
                let dropData: MovieOrTvshowType[] = JSON.parse(list)
                dropData.push(movie)
                localStorage.setItem(userList, JSON.stringify(dropData))
            }
            if( list === null ) {
                let dropData: MovieOrTvshowType[] = []
                dropData.push(movie)
                localStorage.setItem(userList, JSON.stringify(dropData))
            }
        }
    }

    return (
        <button 
            onClick={() => saveMovieInMyList({ movie })}
            className={ title ? 'square-button' : 'small-circle circle-button'}
            >
            <i>{ isSaved && user
                ? <AiOutlineCheck size={12} color='#fff' title='this movie saved in My List'/> 
                : <AiOutlinePlus size={12} color='#fff' title='TTTTTTTTTTTTTTTTTTTT'/>}
            </i>
            { title }
        </button>
    )
}

export default Button_SaveMovieInMyList;
