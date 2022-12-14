import React from 'react'
import './Car.css'

function Car() {
  return (
    <div>
      <div className='Ins-Bg' id='carInsBG'>

        <div className='bg-Info'>
          <div className='divStyle'>
            <h1 className='pageHeader'>Car Insurance</h1>
            <p className='pageHeaderpara'>Affordable Car insurance on and off the road </p>
          </div>

        </div>
      </div>
      <div className='bgBackBone'></div>
      <div className='container insInfo'>
        <h1 className='insText'>What type of car insurance do I need?</h1>
        <p className='insText ins-Para'>The best car insurance for you is an affordable policy that covers what you need – don’t just pick the cheapest option.<br/>

You’ll need third party cover as a minimum. It’s compulsory, and you can’t legally drive without it. But exactly what you’re covered for depends on the type of policy you choose.<br/>

</p>
        <div className='container d-md-flex'>
          <div class="card ins-CardsPage">
            <div class="card-body">
              <h5 class="card-title">Comprehensive car insurance</h5><br/>
              <p class="card-text insCardPara">This is the most extensive cover you can get. It covers you for:<br/><br/>

1-Repair or replacement costs if your car’s damaged or written off<br/><br/>
2-If your car's stolen or catches fire<br/><br/>
3-Claims made against you for people, passengers and their property.<br/><br/>
4-It may differ by policy, so check what you're covered for<br/><br/>
</p>
            </div>
          </div>
          <div class="card ins-CardsPage">
            <div class="card-body">
              <h5 class="card-title">Third party, fire and theft</h5><br/>
              <p class="card-text insCardPara">
              1-This covers you for damage to other people, passengers or their property<br/><br/>
2-Your car’s covered if it gets stolen or damaged by fire too<br/><br/>
3-If you’re responsible for an accident, it won’t cover repairs to your vehicle or your own medical costs.<br/><br/></p>
            </div>
          </div>
          <div class="card ins-CardsPage">
            <div class="card-body">
              <h5 class="card-title">Third party only</h5>
              <p class="card-text insCardPara">1-This is the most basic level of cover<br/><br/>
2-It's lowest level of cover you need to legally drive your car in the UK.<br/><br/>
3-You’ll only be covered for damage you cause to other people, passengers, or their property.<br/><br/>
4-There’s no cover for you or your car.<br/><br/>
5-If your car’s stolen, damaged or catches fire you won’t be able to claim back the cost.<br/><br/></p>
            </div>
          </div>

        </div>
        

      </div>
      <br /><br />
      <div className='imgTextIns'>
        <h1 className='insText'>How much does car insurance cost?</h1><br />c
        <div className='container d-lg-flex'>
          <p>Insurers use statistics to work out how likely you are to make a claim on your car insurance – and that's what sets the price.<br /><br />

          The average price of a comprehensive policy is $549. Third party, fire and theft (TPFT) is considerably more at $734, and third party only (TPO) is more again, at $920.<br/><br />

          These are just averages though – your quotes will depend on a lot more than just the cover type you choose. Your age, the car you drive, mileage and driving history all play a part.<br /><br />


          </p>
          <img src='./imgs/carPrice.png' className='insTextImg-Img' alt=""></img>
        </div>
      </div>
      <div>
       <div className='container-list'>
      
   
    <h1>  Car Insurance plans </h1>
    
    <div className='row'>
             <div className='col-12 col-sm-3 col-md-3 col-lg-3 '>
        <ul className="list-group">
             <li className="list-group-item">
             <p className="carInsCardsPrice">Third party only</p>
             <h6>Main Benefits </h6>
             </li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Accident Cover</p><div className='col-2 '><img alt='check' src='./imgs/check.png'/></div> </div> </li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Injury coverage</p><div className='col-2 '><img alt='check' src='./imgs/close.png'/></div> </div></li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Rent a car until the end of the maintenance</p><div className='col-2 '><img alt='check' src='./imgs/close.png'/></div> </div></li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Death coverage</p><div className='col-2 '><img alt='check' src='./imgs/close.png'/></div> </div></li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Covering of the maintenance</p><div className='col-2 '><img alt='check' src='./imgs/close.png'/></div> </div></li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>covered if it gets stolen or damaged by fire too</p><div className='col-2 '><img alt='check' src='./imgs/close.png'/></div> </div></li>
        </ul>
        </div>
        <div className='col-12 col-sm-6 col-md-6 col-lg-6 '>
  <ul className="list-group">
  <li className="list-group-item">
             <p className="carInsCardsPrice">Comprehensive car insurance</p>
             <h6>Main Benefits </h6>
             </li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Accident Cover</p><div className='col-2 '><img alt='check' src='./imgs/check.png'/></div> </div> </li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Injury coverage</p><div className='col-2 '><img alt='check' src='./imgs/check.png'/></div> </div></li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Rent a car until the end of the maintenance</p><div className='col-2 '><img alt='check' src='./imgs/check.png'/></div> </div></li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Death coverage</p><div className='col-2 '><img alt='check' src='./imgs/check.png'/></div> </div></li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Covering 80% of the maintenance</p><div className='col-2 '><img alt='check' src='./imgs/check.png'/></div> </div></li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>covered if it gets stolen or damaged by fire too</p><div className='col-2 '><img alt='check' src='./imgs/check.png'/></div> </div></li>
            <li className="list-group-item"><div className='row'> <p className='col-10'>Covering the cost of repairing the damaged car because of you up to 80%</p><div className='col-2 '><img alt='check' src='./imgs/check.png'/></div> </div></li>
               </ul>
        </div>
        <div className='col-12 col-sm-3 col-md-3 col-lg-3 '>
        <ul className="list-group">
             <li className="list-group-item">
             <p className="carInsCardsPrice">Third party, fire and theft</p>
             <h6>Main Benefits </h6>
             </li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Accident Cover</p><div className='col-2 '><img alt='check' src='./imgs/check.png'/></div> </div> </li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Injury coverage</p><div className='col-2 '><img alt='check' src='./imgs/check.png'/></div> </div></li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Rent a car until the end of the maintenance</p><div className='col-2 '><img alt='check' src='./imgs/close.png'/></div> </div></li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Death coverage</p><div className='col-2 '><img alt='check' src='./imgs/close.png'/></div> </div></li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>covered if it gets stolen or damaged by fire too</p><div className='col-2 '><img alt='check' src='./imgs/check.png'/></div> </div></li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Covering 70% of the maintenance</p><div className='col-2 '><img alt='check' src='./imgs/check.png'/></div> </div></li>
        </ul>
        </div>  
  
    </div>
       </div>
    
    </div>
      <div className='moreInfo'>
        <div className='container'>
          <h1 className='moreInfoh1'>Do I need car insurance?</h1>
          <p className='moreInfoP'><br />
Car insurance is a legal requirement if you’re driving in the UK. Find out more about choosing the right cover.<br />

<h3>Car insurance for over 50s</h3><br />
Having a wealth of driving experience means car insurance for over 50s is usually cheaper – and there are insurers that offer specialisist insurance too.<br /><br />

<h3>Insurance for new drivers</h3><br />
New and young drivers always pay more. But it doesn’t mean you can’t get insurance, or you can’t get a good deal.<br /><br />

<h3>Learner driver insurance</h3><br />
Learner drivers have a few options for getting covered before taking their test – whether that’s in your own car, or someone else’s.<br /><br />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Car