import { SlDislike } from 'react-icons/sl'
import './buttons.scss'

type buttonProp = {
    icon_size: number
}

const Button_Dislike = ({icon_size}: buttonProp) => {
    // mock link button
    return (
        <button 
            style={{
                width: `${icon_size * 2}px`,
                height: `${icon_size * 2}px`,
                paddingLeft: `${icon_size / 6}px`
            }}
            className="circle-button">
            <SlDislike size={icon_size} color='#fff'/>
        </button>
    )
}
export default Button_Dislike;