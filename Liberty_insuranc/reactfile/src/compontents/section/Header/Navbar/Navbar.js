import './Navbar.css'
import { Link } from 'react-router-dom';


//note :- NavBar has not been Linked yet


const Navbar = () => {
  return (
    <div>

    <nav class="navbar fixed-top navbar-expand-lg ">
            <div className="container">
              <a className="navbar-brand nav-link" href="/"><img className='logo' alt='logo' src='./imgs/logo.png'/></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className='nava'>

               
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <div id="home-link">
                  <a className="nav-link " aria-current="page" href="/">Home</a>
                     </div>
                   </li>
                  <li className="nav-item" id="insurs">
                    <a id="insur" className='nav-link'>Insurance</a>
                    <div className='mega-box'>
                      <div className='content'>
                        <div className='row'>
                        <Link className='navLink' to='/car'> <header><ul>Car Insurance</ul></header> </Link>
                          <ul className='mega-links'>
                            <li><p className='pra'>we will help you to save your car</p></li>
                          </ul>            
                        </div>
                        <div className='row'>
                        <Link className='navLink' to='/Bank'> <header><ul>Bank Insurance</ul></header> </Link>
                          <ul class="mega-links">
                            <li><p className='pra'>Save your money from losing</p></li>
                          </ul>
                        </div>
                        <div className='row'>
                        <Link className='navLink' to='/Life'><header><ul>Life Insurance</ul></header></Link>
                          <ul className='mega-links'>
                            <li><p className='pra'>Protect yourself and your life</p></li>
                          </ul>
                        </div>
                        <div className='row'>
                        <Link className='navLink' to='/Health'><header><ul>Health Insurance</ul></header></Link>
                          <ul class="mega-links">
                            <li><p className='pra'>Don't Worry about your health</p></li>
                          </ul>
                        </div>
                        <div className='row'>
                        <Link className='navLink' to='/Contracts'><header><ul>Contracts Insurance</ul></header></Link>
                          <ul className="mega-links">
                            <li><p className='pra'> We'll help you save in building</p></li>
                          </ul>
                        </div>
                        <div className='row'>
                        <Link className='navLink' to='/Home'><header><ul>Home Insurance</ul></header></Link>
                          <ul className="mega-links">
                            <li><p className='pra'>protect your home</p></li>
                          </ul>
                        </div>
                      </div>

                    </div>
                  </li>
                    <li className="nav-item">
                      <div id="home-link">
                  <a className="nav-link " aria-current="page" href="#Services">Services</a>
                     </div>
                   </li>
                </ul>
                </div>
              </div>
            </div>
          </nav>
          <div className='navback'>

          </div>
    </div>

  )
}

export default Navbar;