import type { Full_Media_Types, TotalMovieAndTvshowType } from '@/types/movies.types'
import { db } from '../firebase.config'
import { doc, deleteDoc, getDocs, collection, setDoc } from 'firebase/firestore'

type saveMovieProps = {
    user_id: string
    movie: TotalMovieAndTvshowType
}

export async function saveMovieInMyList({user_id, movie}: saveMovieProps) {
    if( user_id ) {
        const docRef = `MY_LIST_${user_id.slice(0, 8)}`
        await setDoc( doc(db, docRef, movie.id.toString()), movie )
    }
};
