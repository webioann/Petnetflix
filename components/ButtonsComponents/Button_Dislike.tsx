import { SlDislike } from 'react-icons/sl'
import './buttons.scss'

const Button_Dislike = () => {
    // mock link button
    return (
        <button className="small-circle circle-button">
            <SlDislike size={10} color='#fff'/>
        </button>
    )
}
export default Button_Dislike;