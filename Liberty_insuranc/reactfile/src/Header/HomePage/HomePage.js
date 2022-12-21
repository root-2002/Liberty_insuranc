import React from 'react'
import './HomePage.css'
export default function HomePage() {
  return (
    <div>
      
        <div className='banner-container bg-image homeBanner'>
          <div className="container header-cont">
            
          <h2 className="headerH2">Welcome to Liberty Insurance</h2>
          <h1>Live Freely , For You Are In Safe Hands </h1>
          
          </div>
          
 
    </div>
    <div className='container-fluid '>
    <h2 className="underHeader">What Do We Have To Offer ?</h2>
    <div className='container offercon firstOff'>
      <div className='img-col'>
        <img src='./imgs/homeFamily.png' id='offImg' alt=" "></img>
      </div>
      <div className='text-col'>
        <h2>Taking care</h2>
        <h1>OF YOUR FAMILY</h1>
        <p className='text-break fs-3'>
        We know that small details can make a big difference to families. We’re committed to offering flexibility on our plans, helping you to find the right health cover for your loved ones at the right price. But that’s not just about the insurance policy, we’re about the after sale service. At JICO we’re with you anywhere, anytime
        </p>
      </div>
    </div>
    </div>
    <div className='container offercon secOff'>
      <div className='text-col'>
        <h2 className='homeUpText'>Taking care</h2>
        <h1 className='homeUpText'>OF YOUR HOME</h1>
        <p className='text-break fs-3 homeUpText'>
        Ask yourself: do you want your home to be protected in the event of flood, fire, theft or other accidental damage? Or would you rather deal with the expense and the stress on your own? Home insurance starting from just 8.3 JDs per month.
        </p>
      </div>
      <div className='img-col'>
        <img src='./imgs/homeHome.png' id="homeBottomImg"alt=" "></img>
      </div>
      <div className='text-col'>
        <h2 className='homeBottomText'>Taking care</h2>
        <h1 className='homeBottomText'>OF YOUR HOME</h1>
        <p className='text-break fs-3 homeBottomText'>
        Ask yourself: do you want your home to be protected in the event of flood, fire, theft or other accidental damage? Or would you rather deal with the expense and the stress on your own? Home insurance starting from just 8.3 JDs per month.
        </p>
      </div>
    </div>
    <div className='container offercon thirdOff'>
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

