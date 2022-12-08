import React from 'react'
import './HomePage.css'

export default function HomePage() {
  return (
    <div>
        <div className='bg-image homeBanner'>
          <div className="container header-cont">
            
          <h2 className="headerH2">Welcome to Liberty Insurance</h2>
          <h1>Live Freely , For You Are In Safe Hands </h1>
          
          </div>
 
    </div>
    <h2 className="underHeader">What Do We Have To Offer ?</h2>
    <div className='container offercon'>
      <div className='img-col'>
        <img src='./imgs/homeFamily.png' alt=" "></img>
      </div>
      <div className='text-col'>
        <h2>Taking care</h2>
        <h1>OF YOUR FAMILY</h1>
        <p className='text-break fs-3'>
        We know that small details can make a big difference to families. We’re committed to offering flexibility on our plans, helping you to find the right health cover for your loved ones at the right price. But that’s not just about the insurance policy, we’re about the after sale service. At JICO we’re with you anywhere, anytime
        </p>
      </div>
    </div>
    <div className='container offercon'>
      <div className='text-col'>
        <h2>Taking care</h2>
        <h1>OF YOUR HOME</h1>
        <p className='text-break fs-3'>
        Ask yourself: do you want your home to be protected in the event of flood, fire, theft or other accidental damage? Or would you rather deal with the expense and the stress on your own? Home insurance starting from just 8.3 JDs per month.
        </p>
      </div>
      <div className='img-col'>
        <img src='./imgs/homeHome.png' alt=" "></img>
      </div>
    </div>
    <div className='container offercon'>
      <div className='img-col'>
        <img src='./imgs/homeCar.png' alt=" "></img>
      </div>
      <div className='text-col'>
        <h2>Taking care</h2>
        <h1>OF YOUR CAR</h1>
        <p className='text-break fs-3'>
        Your car is precious. wether yours is a luxury car, an SUV, a 4X4 or a family car, Jerusalem Insurance offers you a great opportunity to help preserve your car with our car insurance that offers more coverages than any other insurance policy. Along with Lababak Service and Mumayaz Car insurance we complete a list of high quality services and coverage for your convenience.
        </p>
      </div>
    </div>
    </div>
  )
}


/*<section>
    
    <header>
      <div className="d-flex justify-content-center">
        
      <div className='container'>
        <div className="bannertext">
          <div className="text-area">
            <h2>Welcome To Liberty Insurance</h2>
          </div>
          <p>"An ounce of prevention is better than a pound of cure"</p>
          <br />
          <p>At Liberty Insurance, we specialize in life insurance plans that provide peace of mind for your family.</p><br /><p>
            Over the years, we have observed how complicated it has become to get protection. That's why we do all the heavy paperwork for you and simplify the whole process.</p><br /><p>
            All you have to do is have a friendly, pressure-free chat with our experienced licensed advisors from the comfort of your home.</p>
        </div>
        </div>
        <img src='./imgs/banner.svg' id="bannerHome"></img>
      </div>
    
      

    </header>
  </section>*/