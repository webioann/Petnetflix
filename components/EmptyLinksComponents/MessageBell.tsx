import Link from 'next/link'
import { BsBellFill } from 'react-icons/bs'
import './fake-links.scss'

const MessageBell = () => {
    // mock link button
    const messageCount = 2;

    return (
        <Link href={'#'} className='bell-wrapper fake-link'>
            { messageCount > 0 && <span className='message-count' style={{color: '#fff'}}>
                {messageCount}
            </span>}
            <BsBellFill  size={16} color='#fff'/>
        </Link>
    )
}

export default MessageBell;