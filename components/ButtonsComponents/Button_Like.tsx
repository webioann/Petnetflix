import { SlLike } from 'react-icons/sl'
import './buttons.scss'

const Button_Like = () => {
    // mock link button
    return (
        <button className="small-circle circle-button">
            <SlLike size={10} color='#fff'/>
        </button>
    )
}
export default Button_Like;