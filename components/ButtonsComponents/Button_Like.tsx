import { SlLike } from 'react-icons/sl'
import './buttons.scss'

type buttonProp = {
    icon_size: number
}

const Button_Like = ({icon_size}: buttonProp) => {
    // mock link button
    return (
        <button 
            style={{
                width: `${icon_size * 2}px`,
                height: `${icon_size * 2}px`,
                paddingLeft: `${icon_size / 6}px`
            }}
            className="circle-button">
            <SlLike size={icon_size} color='#fff'/>
        </button>
    )
}
export default Button_Like;