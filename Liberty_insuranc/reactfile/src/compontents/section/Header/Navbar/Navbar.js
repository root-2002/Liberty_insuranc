import './Navbar.css'
import { Link } from 'react-router-dom';


//note :- NavBar has not been Linked yet

const Navbar = () => {
  

  return (
    <div className='divNav'>
    <nav className="navbar navbar-expand-lg py-3">
    <div className="container">
      <a href="#" className="navbar-brand">Liberty Insurance</a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#coll"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="coll">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a href="#Home" className="nav-link">Home page</a>
          </li>
          <li className="nav-item">
            <a href="#Services" className="nav-link">Services</a>
          </li>
          <li className="nav-item">
            <a href="#div-footer" className="nav-link">About us</a>
          </li>
        </ul>
      </div>
    </div>
    
  </nav>
  </div>
  )
}

export default Navbar;