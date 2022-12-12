import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaHome,FaPhoneAlt,FaEnvelope,FaPrint,FaFacebook,FaInstagram} from 'react-icons/fa'
import "./footer.css"
function footer(){
  return (
    <div className='bg-dark'>
    <div className='container-footer'>
        <div className='row py-5 text-white'>
          <div className='col-md-3 col-sm-12'>
            <h4 className="text-danger">liberty insurance</h4><br/>
            <p>
            Yes, state laws set the minimum for what type and amount of coverage people need for auto insurance,
             but that doesn't mean it's enough for you. We're here to help you find the right coverages for you. 
             That's why we've made it easy to customize your car insurance.
            </p><br/>
          </div>
          <div className='col-md-3 col-sm-12'>
            <h4 className="text-danger">services</h4>
            <p>about us</p>
            <p>Know more</p>
            <p>customer serv</p>
          </div>
          <div className='col-md-3 col-sm-12'>
            <h4 className="text-danger">our Insurances </h4>
            <p>Car Insurances</p>
            <p>Life Insurance</p>
            <p> Health Insurance</p>
            <p>Home Insurance</p>
          </div>
          <div className='col-md-3 col-sm-12'>
            <h4 className="text-danger">Address</h4>
            <FaHome /><a href="https://goo.gl/maps/aLrx65LYoaqjpLUa6"target="_blank">  Nablus </a><br />
            <FaPhoneAlt/> <a href="+972 55456489">+972 55456489</a><br />
            <FaEnvelope /><a herf="liberty9999@gmail.com">Liberty9999@gmail.com</a><br />
            <FaPrint /><a herf="+09 5456564">+09 54564564</a><br />
            <FaFacebook/><a herf="liberty_insurance"></a>Liberty_insurance<br />
            <FaInstagram/>Liberty_insurance999<br />
               </div>
             </div>     
            <div className='text-center text-white p-4'>
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