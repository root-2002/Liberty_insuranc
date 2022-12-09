import './Navbar.css'
import { Link } from 'react-router-dom';

<<<<<<< HEAD

=======
//note :- NavBar has not been Linked yet
>>>>>>> main

const Navbar = () => {

  return (
<<<<<<< HEAD
    <nav class="navbar navbar-expand-lg py-3">
    <div class="container">
      <a href="#" class="navbar-brand">Librty Insurance</a>

      <button
        class="navbar-toggler"
=======
    <div className='divNav'>
    <nav className="navbar navbar-expand-lg py-3">
    <div className="container">
      <a href="#" className="navbar-brand">Liberty Insurance</a>

      <button
        className="navbar-toggler"
>>>>>>> main
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#coll"
      >
<<<<<<< HEAD
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
=======
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
            <a href="#About us" className="nav-link">About us</a>
          </li>
          <li className="nav-item">
            <a href="#Contact us" className="nav-link">Contact us</a>
>>>>>>> main
          </li>
        </ul>
      </div>
    </div>
<<<<<<< HEAD
  </nav>
=======
    
  </nav>
  </div>
>>>>>>> main
  )
}

export default Navbar;