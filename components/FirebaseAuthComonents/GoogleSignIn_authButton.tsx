import { useRouter } from 'next/navigation'
import { auth, provider } from '../../firebase.config'
import { signInWithPopup } from "firebase/auth"
import { FaGoogle } from 'react-icons/fa'
import './auth-button.scss'

const GoogleSignIn_authButton = () => {

    const router = useRouter()

    const googleRegistration = async () => {
        try {
            // typical Google authentication with used popup
            await signInWithPopup(auth, provider)
            router.push('/browse')
        }
        catch(error) {console.error(error)} 
    }

    return (
        <button className='auth-button' onClick={googleRegistration}>
            <FaGoogle/>
            Google 
        </button>
    )
}

export default GoogleSignIn_authButton;