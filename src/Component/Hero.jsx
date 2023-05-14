import React from 'react'
import logo from '../assets/images/logo.svg'
import arrow from '../assets/images/icon-arrow.svg'
import mobilehero from '../assets/images/hero-mobile.jpg'
import error from '../assets/images/icon-error.svg'
import { useState } from 'react'

export default function Hero() {

    const [value, setValue] = useState('')
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const getInputValue = (e) => {
        var val = e.target.value
        setValue(val)
    }
    const validateEmail = () => {
        if (pattern.test(value)) {
            console.log('email mached');
            document.querySelector('.error-icon').classList.remove('show-error')
           alert( document.getElementById('err_msg').innerHTML="Email successfully submitted!")
            document.getElementById('err_msg').style.color="green";
            document.querySelector('#input__box').classList.remove('ib')

        }
        else {
            console.log('email not mached');
            document.querySelector('.error-icon').classList.add('show-error')
            document.querySelector('.error_msg').classList.add('show-error')
            document.querySelector('#input__box').classList.add('ib')
            document.getElementById('err_msg').innerHTML="Please currect email address!"
            document.getElementById('err_msg').style.color="red";


            
        }
    }

    return (
        <main className='main'>
            <div className='main__content d-f '>
                <div className='main__content__text '>
                    <div className='main__content__text__logo  '>
                        <img src={logo} alt="" />
                    </div>
                    <div className='main__content__text__logo2  '>
                        <img src={logo} alt="" />
                    </div>
                    <div className='main__content__text__img2'>
                        <img src={mobilehero} alt="" />
                    </div>
                    <div className='main__content__text__details '>
                        <h1><span>We're</span> coming soon</h1>
                        <p>  Hello fellow shoppers! We're currently building our new fashion store.
                            Add your email below to stay up-to-date with announcements and our launch deals. </p>
                        <div className='main__content__text__details__search ' id='input__box'>
                            <input type="email" placeholder='Email Address' onChange={getInputValue} />
                            <button id='submit_btn' onClick={validateEmail}>
                                <img src={arrow} alt="image" />
                                <img src={error} alt="" className='error-icon' />
                            </button>
                        </div>
                        <div className='error_msg'>
                            <p className='main__content__text__details__showoutput ' id='err_msg'>Please currect email address</p>
                        </div>
                    </div>
                </div>
                <div className='main__content__img '>
                </div>
            </div>
        </main>

    )
}
