import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "./Footer.css";
export default function Footer() {
  return (

    <MDBFooter  className='text-center footr-c text-lg-start text-muted '>
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <div className='me-5 d-none d-lg-block'>
        <span>Get connected with us on social networks:</span>
      </div>

      <div className="footerText">
        <a href='' className='me-4 '>
         <img src="./imgs/instagram.png"/>
        </a>
        <a href='' className='me-4 '>
        <img src="./imgs/facebook.png"/>
        </a>
       
      </div>
    </section>

    <section className=''>
    <div className="text-center text-md-start mt-2">
      
        <MDBRow className='mt-3'>
          <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
            <h4 className='text-uppercase fw-bold mb-4'>
              <MDBIcon color='light' icon='gem' className='me-3' />
              Liberty insurance
            </h4>
            <h5>Personalize your car insurance with the coverages you need.</h5>
            <p className="light">
            Yes, state laws set the minimum for what type and amount of coverage people need for auto insurance, but that doesn't mean it's enough for you. We're here to help you find the right coverages for you. That's why we've made it easy to customize your car insurance.
            </p>
          </MDBCol>

          <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
            <p className="light">
              <a href='/car' className=''>
                Car Insurance
              </a>
            </p>
            <p className="light">
              <a href='/life' className=''>
                Life Insurance
              </a>
            </p>
            <p className="light">
              <a href='/health' className=''>
               Health Insurance
              </a>
            </p>
            <p className="light">
              <a href='/home!' className=''>
                Home Insurance
              </a>
            </p>
          </MDBCol>

          <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
            <p className="light">
              <a href='#!' className=''>
                Pricing
              </a>
            </p>
            <p className="light">
              <a href='#!' className=''>
                Settings
              </a>
            </p>
            <p className="light">
              <a href='#!' className=''>
                Orders
              </a>
            </p>
            <p className="light">
              <a href='#!' className=''>
                Help
              </a>
            </p>
          </MDBCol>

          <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p className="light">
              <MDBIcon color='light' icon='home' className='me-2' />
              New York, NY 10012, US
            </p>
            <p className="light">
              <MDBIcon color='light' icon='envelope' className='me-3' />
              info@example.com
            </p>
            <p className="light">
              <MDBIcon color='light' icon='phone' className='me-3' /> + 01 234 567 88
            </p>
            <p className="light">
              <MDBIcon color='light' icon='print' className='me-3' /> + 01 234 567 89
            </p>
          </MDBCol>
        </MDBRow>

    </div>
    </section>

    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2022 Copyright:
      <a className=' fw-bold' href='https://github.com/root-2002/Liberty_insuranc'>
       Team wep
      </a>
    </div>
  </MDBFooter>
  
  );
}

