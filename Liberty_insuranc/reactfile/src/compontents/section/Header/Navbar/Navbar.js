import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div class="navbar">
            <div className="container">
                <a className="logo" href="#root">liberty insurance</a>
                <div className="H-I-S-C">
                    <a href="#root">Home</a>
                    <div className="mega-menu">
                        <button className="insurance">insurance</button>
                        <div className="insurance-contant">
                        <div className="row">
                            <div className="column">
                            <Link to='/car'> <a href="#">Car Insurance</a> </Link>
                                <p>We'll help you save hundreds</p>
                            </div>
                            <div className="column">
                            <Link to='/Bank'>  <a href="#">Travel Insurance</a></Link>
                                <p>Be protected at all time</p>
                            </div>
                            <div className="column">
                            <Link to='/Life'> <a href="#">Life Insurance</a></Link>
                                <p>Protect and secure yourself </p>
                            </div>
                            <div className="column">
                            <Link to='/Health'>  <a href="#">Health Insurance</a></Link>
                                <p>Your health is very important </p>
                            </div>
                            <div className="column">
                            <Link to='/Contracts'>  <a href="#">Contracts Insurance</a></Link>
                                <p>We'll help you save hundreds</p>
                            </div>
                            <div className="column">
                            <Link to='/HomeIns'>  <a href="#">Home Insurance</a></Link>
                                <p>protect your home</p>
                            </div>
                        </div>
                      </div>
                     </div>
                     <a href="#services">Services</a>
                     <a href="#div-footer">Contact</a>
                    </div>
                </div>
               
            </div>
     )
  }

export default Navbar;