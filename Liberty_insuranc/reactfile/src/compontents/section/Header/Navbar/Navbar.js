import './Navbar.css'
import { Link } from 'react-router-dom';
//import {Signin, Signup} from '../../index'
const Navbar = () => {
  return (
   <>
    <nav className="navbar navbar-expand-lg bg-green">
      <a className="navbar-brand" href="#"><img src ="images/moonsite.png"/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
      </button>
     <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav text-center">
          <li className="nav-item">
           <a className="nav-link" active aria-current="page" href="/home">HOME</a>
          </li>
         <li class="nav-item" role="presentation">
         <button class="btn  " type="button" data-bs-toggle="drogitpdown" aria-expanded="false">
    <div className='test fs-5 drop'>Insurance</div> 
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item test2" href="#">Action</a></li>
    <li><a class="dropdown-item test2" href="#">Another action</a></li>
    <li><a class="dropdown-item test2" href="#">Something else here</a></li>
  </ul>
  </li>
          <li className="nav-item">
            <a className="nav-link" href="/about-us">ABOUT US</a>
          </li>
         <li className="nav-item">
           <a className="nav-link"href="/contact-us">CONTACT US</a>
         </li>
        </ul>
      <ul className="navbar-nav navbar-right sign">
        <div className='row' >
        <div className="col-12 col-lg-6 sign-up">
            <Link to ='/SignUp'>
            <button type="button">SIGN UP</button> 
            </Link>
             
          </div>

        <div className='col-12 col-lg-6 '>

          <div className="sign-in">
          <Link to='/SignIn'>
          <button type="button">SIGN IN</button>
          </Link>
            </div>
        </div>
        </div>
       
      </ul>
     </div>
    
   </nav>
   
   </>
  )
}

export default Navbar;