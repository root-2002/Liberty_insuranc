import './InsuranceDepartments.css';
import img from '../img/sedan.png'
import img2 from '../img/life-insurance.png'
import img1 from '../img/bankrupt.png'
import img3 from '../img/insurance.png'
import img4 from '../img/clipboard.png'
import img5 from '../img/home-insurance.png'
const InsuranceDepartments = () => {
  return (
    <>
      <div className='container-card'>
        <div className='row log '>
        <h1 className='col-4'>I</h1><h2 className='col-3'>n</h2><h3 className='col-2'>s</h3><h4 className='col-1'>u</h4><h5>r</h5><h6>a</h6><p>ce</p>
        </div>
        <div className='row'>
          <div className='col-12 col-md-3 '></div>
        <div className='col-12 col-md-2 '>
          <div className='Card'>
            <div className='card-body'>
              <a className='link'>
                <img src={img} alt='img'/>
                <h4 className="h4">car insurance</h4>
                <p className='pr'>We'll help you save hundreds</p>
              </a>
            </div>
           
          </div>
        </div>
        <div className='col-12 col-md-2 '>
          <div className='Card'>
            <div className='card-body'>
              <a className='link'>
                <img src={img1} alt='img'/>
                <h4 className="h4">bank insurance</h4>
                <p className='pr'>Save your money from losing</p>
              </a>
            </div>
           
          </div>
        </div>
        <div className='col-12 col-md-2 '>
          <div className='Card'>
            <div className='card-body'>
              <a className='link'>
                <img src={img2} alt='img'/>
                <h4 className="h4">life insurance</h4>
                <p className='pr'>Protect yourself and secure your life</p>
              </a>
            </div>
           
          </div>
        </div>
        
        </div>
        <div className='row'>
        <div className='col-12 col-md-3 '></div>
        <div className='col-12 col-md-2 '>
          <div className='Card'>
            <div className='card-body'>
              <a className='link'>
                <img src={img3} alt='img'/>
                <h4 className="h4">health insurance</h4>
                <p className='pr'>Your health is more important than your money</p>
              </a>
            </div>
           
          </div>
        </div>
        <div className='col-12 col-md-2 '>
          <div className='Card'>
            <div className='card-body'>
              <a className='link'>
                <img src={img4} alt='img'/>
                <h4 className="h4">contracts</h4>
                <p className='pr'>We'll help you save hundreds</p>
              </a>
            </div>
           
          </div>
        </div>
        <div className='col-12 col-md-2 '>
          <div className='Card'>
            <div className='card-body'>
              <a className='link'>
                <img src={img5} alt='img'/>
                <h4 className="h4">home insurance</h4>
                <p className='pr'>protect your home</p>
              </a>
            </div>
           
          </div>
        </div>
        
        </div>
        <div>ds</div>
      </div>
    </>
    
  )
}

export default InsuranceDepartments