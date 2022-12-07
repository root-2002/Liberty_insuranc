import './Navbar.css'
import { Link } from 'react-router-dom';



const Navbar = () => {

  return (
    <div className='divNav'>
    <nav class="navbar navbar-expand-lg py-3">
    <div class="container">
      <a href="#" class="navbar-brand">Liberty Insurance</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#coll"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="coll">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a href="#Home" class="nav-link">Home page</a>
          </li>
          <li class="nav-item">
            <a href="#Services" class="nav-link">Services</a>
          </li>
          <li class="nav-item">
            <a href="#About us" class="nav-link">About us</a>
          </li>
          <li class="nav-item">
            <a href="#Contact us" class="nav-link">Contact us</a>
          </li>
        </ul>
      </div>
    </div>
    
  </nav>
  </div>
  )
}

export default Navbar;