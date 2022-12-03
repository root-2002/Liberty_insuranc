import React from 'react'
import './NewsHomePage.css'


export default function NewsHomePage() {
  return (
    <div>    
      <div className="container d-flex p-2" id="con1">
        <h1>Latest News</h1>
      
      </div>
      
   
      <div className="container d-md-flex p-4" id="con2">
      <div class="card">
  <img className="card-img-top" src="/imgs/News1.png" alt="img no.1"></img>
  <div className="card-body">
    <h5 className="card-title">Liberty Insurance Gets 20000 MSI Global Award</h5>
    <p className="card-text">Liberty Insurance is Filled with joy after getting the 20000 MSI Global Award , congrats Liberty Insurance</p>
    
  </div>
</div>
<div class="card" >
  <img className="card-img-top" src="/imgs/News2.png" alt="img no.2"></img>
  <div className="card-body">
    <h5 className="card-title">Liberty Insurance and Freedom Bank signs Comprehensive insurance services.</h5>
    <p className="card-text">Today we are sure that Freedom bank is in Safe Hands.</p>
    
  </div>
</div>
<div className="card" >
  <img className="card-img-top" src="/imgs/News3.png" alt="img no.3"></img>
  <div className="card-body">
    <h5 class="card-title">Liberty Insurance Compensates Rolex inc. With a check of 467.000$ after 3-Days of an accident</h5>
    <p class="card-text">SomeHow I Wish I was working there , hell I would break my leg every day </p>
    
  </div>
</div>
<div className="card">
  <img className="card-img-top" src="/imgs/News4.png" alt="img no.4"></img>
  <div className="card-body">
    <h5 className="card-title">Liberty Insurance and The Bank of 1-State Released New services to make transitions easier on new clients</h5>
    <p className="card-text">The Owner of Liberty Insurance says "if you believe there is 2 states in palstine , you are not a client ".</p>
    
  </div>
</div>
    </div>

    
    </div>
  )
}
