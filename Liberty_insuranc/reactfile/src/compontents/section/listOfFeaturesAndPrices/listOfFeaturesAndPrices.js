import './listOfFeaturesAndPrices.css'
function listOfFeaturesAndPrices(props) {
  return (
    <div>
       <div className='container-list'>
      
   
    <h1>  {props.name} Insurance plan </h1>
    
    <div className='row'>
             <div className='col-12 col-sm-3 col-md-3 col-lg-3 '>
        <ul className="list-group">
             <li className="list-group-item">
              <h1 className='pris'>{props.pris1}</h1>
             <p>Defined Benefit Limit</p>
             <h5>Accident Plan</h5>
             <p><img src='./imgs/star(1).png' alt='star' /> MOST AFFORDABLE</p>
             <h6>Main Benefits </h6>
             </li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Accident Cover</p><div className='col-2 '><img alt='check' src='./imgs/check.png'/></div> </div> </li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Injury coverage</p><div className='col-2 '><img alt='check' src='./imgs/close.png'/></div> </div></li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Rent a car until the end of the maintenance</p><div className='col-2 '><img alt='check' src='./imgs/close.png'/></div> </div></li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Death coverage</p><div className='col-2 '><img alt='check' src='./imgs/close.png'/></div> </div></li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Covering 40% of the maintenance</p><div className='col-2 '><img alt='check' src='./imgs/check.png'/></div> </div></li>
        </ul>
        </div>
        <div className='col-12 col-sm-6 col-md-6 col-lg-6 '>
  <ul className="list-group">
  <li className="list-group-item">
              <h1 className='pris'>{props.pris2}</h1>
             <p>Defined Benefit Limit</p>
             <h5>Accident Plan</h5>
             <p><img src='./imgs/star(1).png' alt='star' /> MOST AFFORDABLE</p>
             <h6>Main Benefits </h6>
             </li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Accident Cover</p><div className='col-2 '><img alt='check' src='./imgs/check.png'/></div> </div> </li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Injury coverage</p><div className='col-2 '><img alt='check' src='./imgs/check.png'/></div> </div></li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Rent a car until the end of the maintenance</p><div className='col-2 '><img alt='check' src='./imgs/check.png'/></div> </div></li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Death coverage</p><div className='col-2 '><img alt='check' src='./imgs/check.png'/></div> </div></li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Covering 80% of the maintenance</p><div className='col-2 '><img alt='check' src='./imgs/check.png'/></div> </div></li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Covering the cost of repairing the damaged car because of you up to 80%</p><div className='col-2 '><img alt='check' src='./imgs/check.png'/></div> </div></li>
               </ul>
        </div>
        <div className='col-12 col-sm-3 col-md-3 col-lg-3 '>
        <ul className="list-group">
             <li className="list-group-item">
              <h1 className='pris'>{props.pris3}</h1>
             <p>Defined Benefit Limit</p>
             <h5>Accident Plan</h5>
             <p><img src='./imgs/star(1).png' alt='star' /> MOST AFFORDABLE</p>
             <h6>Main Benefits </h6>
             </li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Accident Cover</p><div className='col-2 '><img alt='check' src='./imgs/check.png'/></div> </div> </li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Injury coverage</p><div className='col-2 '><img alt='check' src='./imgs/check.png'/></div> </div></li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Rent a car until the end of the maintenance</p><div className='col-2 '><img alt='check' src='./imgs/close.png'/></div> </div></li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Death coverage</p><div className='col-2 '><img alt='check' src='./imgs/close.png'/></div> </div></li>
             <li className="list-group-item"><div className='row'> <p className='col-10'>Covering 70% of the maintenance</p><div className='col-2 '><img alt='check' src='./imgs/check.png'/></div> </div></li>
        </ul>
        </div>  
  
    </div>
       </div>
    
    </div>
  )
}

export default listOfFeaturesAndPrices