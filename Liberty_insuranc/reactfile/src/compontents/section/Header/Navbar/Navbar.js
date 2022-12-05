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
          <li className="nav-item">

           <div className="dropdown">
  <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about-us">ABOUT US</a>
          </li>
         <li className="nav-item">
           <a className="nav-link"href="/contact-us">CONTACT US</a>
         </li>
        </ul>
     </div>
    
      <ul className="navbar-nav navbar-right">
        <div className='row'>
        <div className="col-6 sign-up">
            <Link to ='/SignUp'>
            <button type="button">SIGN UP</button> 
            </Link>
             
          </div>

        <div className='col-6'>

          <div className="sign-in">
          <Link to='/SignIn'>
          <button type="button">SIGN IN</button>
          </Link>
            </div>
        </div>
        </div>
       
      </ul>
   </nav>
   </>
  )
}

export default Navbar;