  import React from 'react'
  import 'bootstrap/dist/css/bootstrap.min.css'
  import {FaHome,FaPhoneAlt,FaEnvelope,FaPrint,FaFacebook,FaInstagram} from 'react-icons/fa'
  import "./Footer.css"
  import { Link } from 'react-router-dom';
  function footer(){
    return (
      <div className='bg-dark div-footer' id='div-footer'>
        <a name="Services"></a>
      <div className='container-footer '>
          <div className='row py-5 text-white footerContentDiv'>
            <div className='col-lg-3 col-sm-12 footerInfo'>
              <h4 className="text-white footerText bigerText"><img className='liberty_insurance' alt='liberty_insurance' src='./imgs/logo.png'  /></h4>
              <p className='footerText'>
              Yes, state laws set the minimum for what type and amount of coverage people need for auto insurance,
               but that doesn't mean it's enough for you. We're here to help you find the right coverages for you. 
               That's why we've made it easy to customize your car insurance.
              </p>
            </div>
            <div className='col-lg-3 col-sm-12 serv-Sec'>
              <h4 className="text-white footerText bigerText">services</h4>
              <p className='footerText'>about us</p>
              <p className='footerText'>Know more</p>
              <p className='footerText'>customer services</p>
            </div>
            <div className='col-lg-3 col-sm-12'>
              <h4 className="footerText bigerText">our Insurances </h4>
              <Link to='/car'>
              <p className='footerText'>Car Insurances</p>
              </Link>
              <Link to='/Life'>
              <p className='footerText'>Life Insurance</p>
              </Link>
              <Link to='/Health'>
              <p className='footerText'> Health Insurance</p>
              </Link>
              <Link to='/Home'>
              <p className='footerText'>Home Insurance</p>
              </Link>
              <Link to='/Bank'>
              <p className='footerText'>Bank Insurance</p>
              </Link>
              <Link to='/Contracts'>
              <p className='footerText'>Contracts Insurance</p>
              </Link>
            </div>
            <div className='col-lg-3 col-sm-12 footerLinks'>
              <h4 className="footerText bigerText">Address</h4>
              <FaHome /><a href="https://goo.gl/maps/aLrx65LYoaqjpLUa6"target="_blank" rel="noreferrer" className='footerText'>  Nablus </a><br />
              <FaPhoneAlt/> <a href='https://github.com/root-2002/Liberty_insuranc' className='footerText' >+972 55456489</a><br />
              <FaEnvelope /><a href='https://github.com/root-2002/Liberty_insuranc' className='footerText'>Liberty9999@gmail.com</a><br />
              <FaPrint /><a href='https://github.com/root-2002/Liberty_insuranc' className='footerText'>+09 54564564</a><br />
              <FaFacebook/><a href='https://github.com/root-2002/Liberty_insuranc' className='footerText'>Liberty_insurance</a><br />
              <FaInstagram/><a className='footerText' href='https://github.com/root-2002/Liberty_insuranc'>Liberty_insurance999</a><br />
                 </div>
               </div>   
              
              <div className='text-center p-4 copyName'>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='https://github.com/root-2002/Liberty_insuranc'>
         Team wep
        </a>
      </div>
            </div>
            </div>
            )
    }
    export default footer