import './SignIn.css'
import {Link} from 'react-router-dom'



function SignIn() {
  return (
    <div className='container' id='signincon'>
<section className="text-center">

  <div className="p-5 bg-image"></div>


  <div className="card1 mx-4 mx-md-5 shadow-5-strong" >
    <div className="card-body py-5 px-md-5">

      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <h2 className="fw-bold mb-5">Sign in </h2>
          <form>
            
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <input type="text" id="form1" className="form-control" />
                  <label className="form-label" htmlFor="form1">First name</label>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <input type="text" id="form2" className="form-control" />
                  <label className="form-label" htmlFor="form2">Last name</label>
                </div>
              </div>
            </div>

            <div className="form-outline mb-4">
              <input type="email" id="form3" className="form-control" />
              <label className="form-label" htmlFor="form3">Email address</label>
            </div>

   
            <div className="form-outline mb-4">
              <input type="password" id="form4" className="form-control" />
              <label className="form-label" htmlFor="form34">Password</label>
            </div>

            <div className="form-check d-flex justify-content-center mb-4">
              <input className="form-check-input me-2" type="checkbox" value="" id="checkbox" />
              <label className="form-check-label" htmlFor="checkbox">
                Subscribe to our newsletter
              </label>
            </div>
            <div className='container d-lg-flex buttonscont'>
              <div className='button2s'>
              <Link to='/SignUp'>
            <button className="btn btn-outline-success btn-block mb-4 frmbutton1 ">
              Sign Up
            </button>
            </Link>

            <button type="submit" className="btn btn-outline-success btn-block mb-4 frmbutton1">
              Sign In 
            </button>
           
            </div>
            </div>
            <Link to='/'>
            <button className="btn btn-outline-success btn-block mb-4 frmbutton">
              Go Back To Home page
            </button>
             </Link>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
  </div>
  )
}

export default SignIn