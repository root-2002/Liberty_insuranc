
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
      <div className='container-card' id="services">
       <h1>OUR SERVICES</h1>
        <div className=' row'>
          <div className='Mcard col-xs-12 col-sm-12 col-md-5 col-lg-4 '>
            <Link to='/car'>
              <div className=' Card-ins'>

                <div className='mCardBody card-body'>
                  <img src={img} alt='img' />
                  <h2 className=" h2 cardsTextHomePage">Car Insurance</h2>
                  <p className=' pr cardsTextHomePage'>We'll help you save hundreds</p>
                </div>
              </div>
            </Link>
          </div>
          <div className='Mcard col-xs-12 col-sm-12 col-md-5 col-lg-4 '>
            <Link to='/Bank'>
              <div className=' Card-ins'>
                <div className='mCardBody card-body'>

                  <img src="./imgs/airplane.png" alt='img' />
                  <h2 className=" h2 cardsTextHomePage">travel Insurance</h2>
                  <p className=' pr cardsTextHomePage'>Be protected at all time</p>


                </div>

              </div>
            </Link>
          </div>
          <div className='Mcard col-xs-12 col-sm-12 col-md-5 col-lg-4 '>
            <Link to='Life'>
              <div className=' Card-ins'>
                <div className='mCardBody card-body'>
                  <img src={img2} alt='img' />
                  <h2 className=" h2 cardsTextHomePage">Life Insurance</h2>
                  <p className=' pr cardsTextHomePage'>Protect and secure yourself </p>
                </div>

              </div>
            </Link>
          </div>

          <div className='Mcard col-xs-12 col-sm-12 col-md-5 col-lg-4 '>
            <Link to='/Health'>
              <div className=' Card-ins'>
                <div className='mCardBody card-body'>
                  <img src={img3} alt='img' />
                  <h2 className=" h2 cardsTextHomePage">Health Insurance</h2>
                  <p className=' pr cardsTextHomePage'>Your health is very important </p>
                </div>

              </div>
            </Link>
          </div>
          <div className='Mcard col-xs-12 col-sm-12 col-md-5 col-lg-4 '>
                <Link to='/Contracts'>
            <div className=' Card-ins'>
              <div className='mCardBody card-body'>
                  <img src={img4} alt='img' />
                  <h2 className=" h2 cardsTextHomePage">Contracts Insurance</h2>
                  <p className=' pr cardsTextHomePage'>We'll help you save hundreds</p>
              </div>

            </div>
                </Link>
          </div>
          <div className='Mcard col-xs-12 col-sm-12 col-md-5 col-lg-4 '>
                <Link to='/HomeIns'>
            <div className=' Card-ins'>
              <div className='mCardBody card-body'>
                  <img src={img5} alt='img' />
                  <h2 className=" h2 cardsTextHomePage">Home Insurance</h2>
                  <p className=' pr cardsTextHomePage'>protect your home</p>
              </div>

            </div>
                </Link>
          </div>

        </div>


      </div>
    </>

  )
}

export default InsuranceDepartments