import React from 'react'
import logo from '../assets/images/logo.svg'
import arrow from '../assets/images/icon-arrow.svg'
import mobilehero from '../assets/images/hero-mobile.jpg'

export default function Hero() {
    const [message, setMessage] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setMessage("Thank you");
    } else {
      setMessage("Please, enter valid Email!");
    }
  };







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
                        <div className='main__content__text__details__search '>
                            <input type="email" placeholder='Email Address' />
                            <button>
                                <img src={arrow} alt="image" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='main__content__img '>
                </div>
            </div>
        </main>

    )
}
