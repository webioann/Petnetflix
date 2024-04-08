import React from 'react'
import Link from 'next/link'
import RegistrationForm from '../../../components/RegisterForm/RegisterForm'
import '../register_pages.scss'

function SignupPage() {
    return (
        <section className='register_page'>
            <h1 className='auth_header'>Sign Up</h1>
            <RegistrationForm variant='signup'/>
            <div className='question'>
                <p className='question_text'>Already have an account ?</p>
                <Link href="/login" className='question_link link'>Login now.</Link> 
            </div>
            <p className='captcha'>
                This page is protected by Google reCAPTCHA to ensure you're not a bot. 
                <span className='captcha_link styles.link'>Learn more.</span> 
            </p>

        </section>
    )
}

export default SignupPage;