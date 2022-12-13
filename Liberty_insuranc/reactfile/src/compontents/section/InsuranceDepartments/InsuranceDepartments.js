
import './InsuranceDepartments.css';
import img from '../img/sedan.png'
import img2 from '../img/life-insurance.png'
import img3 from '../img/insurance.png'
import img4 from '../img/clipboard.png'
import img5 from '../img/home-insurance.png'
import { Link } from 'react-router-dom';
const InsuranceDepartments = () => {
  return (
    <>
      <div className='container-card'>
        
        <div className=' row'>
        <div className='Mcard col-xs-12 col-sm-12 col-md-5 col-lg-4 '>
          <div className=' Card-ins'>
            <div className='mCardBody card-body'>
            <Link to='/car'>
              <img src={img} alt='img'/>
                <h4 className=" h4">Car Insurance</h4>
                <p className=' pr'>We'll help you save hundreds</p>
              </Link>
            </div>
           
          </div>
        </div>
        <div className='Mcard col-xs-12 col-sm-12 col-md-5 col-lg-4 '>
          <div className=' Card-ins'>
            <div className='mCardBody card-body'>
              <Link to='/Bank'>
                <img src="./imgs/airplane.png" alt='img'/>
                <h4 className=" h4">travel Insurance</h4>
                <p className=' pr'>Be protected at all time</p>
              </Link>
             
            </div>
           
          </div>
        </div>
        <div className='Mcard col-xs-12 col-sm-12 col-md-5 col-lg-4 '>
          <div className=' Card-ins'>
            <div className='mCardBody card-body'>
                <Link to='Life'>
                <img src={img2} alt='img'/>
                <h4 className=" h4">Life Insurance</h4>
                <p className=' pr'>Protect yourself and secure your life</p>
                </Link>
            </div>
           
          </div>
        </div>
        
        <div className='Mcard col-xs-12 col-sm-12 col-md-5 col-lg-4 '>
          <div className=' Card-ins'>
            <div className='mCardBody card-body'>
                <Link to ='/Health'>
                <img src={img3} alt='img'/>
                <h4 className=" h4">Health Insurance</h4>
                <p className=' pr'>Your health is more important than your money</p>
                </Link>
            </div>
           
          </div>
        </div>
        <div className='Mcard col-xs-12 col-sm-12 col-md-5 col-lg-4 '>
          <div className=' Card-ins'>
            <div className='mCardBody card-body'>
              <Link to='/Contracts'>
                <img src={img4} alt='img'/>
                <h4 className=" h4">Contracts Insurance</h4>
                <p className=' pr'>We'll help you save hundreds</p>
              </Link>
            </div>
           
          </div>
        </div>
        <div className='Mcard col-xs-12 col-sm-12 col-md-5 col-lg-4 '>
          <div className=' Card-ins'>
            <div className='mCardBody card-body'>
            <Link to='/HomeIns'>
                <img src={img5} alt='img'/>
                <h4 className=" h4">Home Insurance</h4>
                <p className=' pr'>protect your home</p>
                </Link>
            </div>
           
          </div>
        </div>
        
        </div>
        
       
      </div>
    </>
    
  )
}

export default InsuranceDepartments