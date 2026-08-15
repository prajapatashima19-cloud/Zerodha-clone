import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='text-center row'>
               <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'></img>
               <h1 className='mt-4'> Invest in everything</h1>
               <p className=''>Online platform to invest in stocks, derivates, mutual funds, and more</p>
               <button className='btn btn-primary fs-5 mx-auto mt-3 w-25' name='signup now'>Signup now</button>
            </div>
        </div>
     );
}

export default Hero;