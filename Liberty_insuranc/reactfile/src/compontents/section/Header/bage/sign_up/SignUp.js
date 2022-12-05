import './SignUp.css'
import {Link} from 'react-router-dom'
function SignUp() {
  return (
    <div className='container' id='signupcon'>
<section className="text-center">

  <div className="p-5 bg-image"></div>


  <div className="card1 mx-4 mx-md-5 shadow-5-strong" >
    <div className="card-body py-5 px-md-5">

      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <h2 className="fw-bold mb-5">Sign Up </h2>
          <form>
            
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <input type="text" id="Firstname" className="form-control" />
                  <label className="form-label" htmlFor="Firstname">First name</label>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <input type="text" id="Lastname" className="form-control" />
                  <label className="form-label" htmlFor="Lastname">Last name</label>
                </div>
              </div>
            </div>

            <div className="form-outline mb-4">
              <input type="email" id="Emailaddress" className="form-control" />
              <label className="form-label" htmlFor="Emailaddress">Email address</label>
            </div>

   
            <div className="form-outline mb-4">
              <input type="password" id="Password" className="form-control" />
              <label className="form-label" htmlFor="Password">Password</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="RepeatPassword" className="form-control" />
              <label className="form-label" htmlFor="RepeatPassword">Repeat Password</label>
            </div>

            <div className="form-check d-flex justify-content-center mb-4">
              <input className="form-check-input me-2" type="checkbox" value="" id="NewsBox" />
              <label className="form-check-label" htmlFor="NewsBox">
                Subscribe to our newsletter
              </label>
            </div>

           
            <div className='container d-lg-flex buttonscont'>
              <div className='button2s'>

            <button type="submit" className="btn btn-outline-success btn-block mb-4 frmbutton1 " id='upSignUpBut'>
              Sign Up
            </button>
            

            <Link to='/SignIn'>
            <button className="btn btn-outline-success btn-block mb-4 frmbutton1" id="upSignIn">
              Sign In 
            </button>
            </Link>
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
document.getElementById('upSignUpBut').addEventListener('click',SignupCheck)
function SignupCheck(){
  let UpfirstN = document.getElementById('Firstname');
  let UplastN = document.getElementById('Lastname');
  let Upemail =document.getElementById('Emailaddress');
  let Inpass=document.getElementById('Password');
  let InRepass=document.getElementById('RepeatPassword');
  let InNB=document.getElementById('NewsBox');
  
  alert("the name should not be empte ");
      
}




export default SignUp