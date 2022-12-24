
import React, { useState } from 'react'
import './Price.css'
function Price() {
  const [Show, setShow] = useState(false)
  const addclass = () => {
    let Type = document.querySelectorAll("select");
    let Form = document.querySelectorAll("form");
    let license = document.querySelector("#typeoflinc");
    if (Type[0].value === "private") {
      license.innerHTML = "license :" + Type[0].value;
      Type[0].classList.add("hide")
      Form[0].classList.remove("hide");
      Form[1].classList.remove("hide");
    }
    if (Type[0].value === "public") {
      license.innerHTML = "license :" + Type[0].value;
      Type[0].classList.add("hide")
      Form[0].classList.remove("hide");
      Form[1].classList.remove("hide");
    }
    if (Type[0].value === "Shipping") {
      license.innerHTML = "license :" + Type[0].value;
      Type[0].classList.add("hide")
      Form[2].classList.remove("hide");
      Form[1].classList.remove("hide");
    }
    if (Type[0].value === "Motorcycle") {

      license.innerHTML = "license :" + Type[0].value;
      Type[0].classList.add("hide")
      Form[3].classList.remove("hide");
      Form[1].classList.remove("hide");
    }
  }
  const calc = () => {
    let issue=false;

    let Type = document.querySelectorAll("select");
    let price = document.querySelector("#Price").value;
    let Result =document.querySelector("#Result");
    let priceCar= price;
    if(price === ""){
      issue=true;
    }
    if (Type[0].value === "none"){
        issue=true;
    }
    if (Type[0].value === "private") {


      if (Type[2].value === "Mandatory") {
        if(Type[1].value ==="none"){
          issue=true;
        }
        if(Type[1].value ==="1000cc"){
          priceCar = priceCar * 0.02;
        }
        if(Type[1].value ==="1500cc"){
          priceCar = priceCar * 0.028;
        }
        if(Type[1].value ==="2000cc"){
          priceCar = priceCar * 0.031;
        }
        if(Type[1].value ==="2500cc"){
          priceCar = priceCar * 0.034;
        }
        
      }
      if (Type[2].value === "comprehensive") {
        if(Type[1].value ==="none"){
          issue=true;
        }
        if(Type[1].value ==="1000cc"){
          priceCar = priceCar * 0.031;
        }
        if(Type[1].value ==="1500cc"){
          priceCar = priceCar * 0.038;
        }
        if(Type[1].value ==="2000cc"){
          priceCar = priceCar * 0.045;
        }
        if(Type[1].value ==="2500cc"){
          priceCar = priceCar * 0.05;
        }
      }
      if (Type[2].value === "VIP") {
        if(Type[1].value ==="none"){
          issue=true;
        }
        if(Type[1].value ==="1000cc"){
          priceCar = priceCar * 0.042;
        }
        if(Type[1].value ==="1500cc"){
          priceCar = priceCar * 0.049;
        }
        if(Type[1].value ==="2000cc"){
          priceCar = priceCar * 0.054;
        }
        if(Type[1].value ==="2500cc"){
          priceCar = priceCar * 0.06;
        }
      }

    }
    if (Type[0].value === "public") {

      if (Type[2].value === "Mandatory") {
        if(Type[1].value ==="none"){
          issue=true;
        }
        if(Type[1].value ==="1000cc"){
          priceCar = priceCar * 0.036;
        }
        if(Type[1].value ==="1500cc"){
          priceCar = priceCar * 0.04;
        }
        if(Type[1].value ==="2000cc"){
          priceCar = priceCar * 0.048;
        }
        if(Type[1].value ==="2500cc"){
          priceCar = priceCar * 0.05;
        }
      }
      if (Type[2].value === "comprehensive") {
        if(Type[1].value ==="none"){
          issue=true;
        }
        if(Type[1].value ==="1000cc"){
          priceCar = priceCar * 0.042;
        }
        if(Type[1].value ==="1500cc"){
          priceCar = priceCar * 0.05;
        }
        if(Type[1].value ==="2000cc"){
          priceCar = priceCar * 0.058;
        }
        if(Type[1].value ==="2500cc"){
          priceCar = priceCar * 0.061;
        }
      }
      if (Type[2].value === "VIP") {
        if(Type[1].value ==="none"){
          issue=true;
        }
        
        if(Type[1].value ==="1000cc"){
          priceCar = priceCar * 0.06;
        }
        if(Type[1].value ==="1500cc"){
          priceCar = priceCar * 0.069;
        }
        if(Type[1].value ==="2000cc"){
          priceCar = priceCar * 0.073;
        }
        if(Type[1].value ==="2500cc"){
          priceCar = priceCar * 0.077;
        }
      }

    }
    if (Type[0].value === "Shipping") {

      if (Type[2].value === "Mandatory") {
        if (Type[3].value === "7") {
          priceCar = priceCar * 0.02;
        }
        if (Type[3].value === "18") {
          priceCar = priceCar * 0.025;
        }
        if (Type[3].value === "24") {
          priceCar = priceCar * 0.03;
        }

      }
      if (Type[2].value === "comprehensive") {
        if (Type[3].value === "7") {
          priceCar = priceCar * 0.035;
        }
        if (Type[3].value === "18") {
          priceCar = priceCar * 0.04;
        }
        if (Type[3].value === "24") {
          priceCar = priceCar * 0.052;
        }
      }
      if (Type[2].value === "VIP") {
        if (Type[3].value === "7") {
          priceCar = priceCar * 0.042;
        }
        if (Type[3].value === "18") {
          priceCar = priceCar * 0.05;
        }
        if (Type[3].value === "24") {
          priceCar = priceCar * 0.059;
        }
      }

    }
    if (Type[0].value === "Motorcycle") {

      if (Type[2].value === "Mandatory") {
        if (Type[4].value === "250cc") {
          priceCar = priceCar * 0.04;
        }
        if (Type[4].value === "450cc") {
          priceCar = priceCar * 0.05;
        }
        if (Type[4].value === "500cc") {
          priceCar = priceCar * 0.06;
        }


      }
      if (Type[2].value === "comprehensive") {
        if (Type[4].value === "250cc") {
          priceCar = priceCar * 0.07;
        }
        if (Type[4].value === "450cc") {
          priceCar = priceCar * 0.08;
        }
        if (Type[4].value === "500cc") {
          priceCar = priceCar * 0.082;
        }
      }
      if (Type[2].value === "VIP") {
        if (Type[4].value === "250cc") {
          priceCar = priceCar * 0.074;
        }
        if (Type[4].value === "450cc") {
          priceCar = priceCar * 0.089;
        }
        if (Type[4].value === "500cc") {
          priceCar = priceCar * 0.094;
        }
      }

    }
    if(issue){
      Result.innerHTML="Wrong Input"

    }
    else{
    Result.innerHTML=""+(Math.round(priceCar * 100) / 100).toFixed(2) +"$";
  }}
  return (
    <div className='price'>
      {
        Show ? <div className='price-container'>
          <div className='calc'>
            <div onClick={addclass} className='la'>
              <span className='ops' id='typeoflinc'>Type of license</span>
              <div className="op">
                <select name='type' id="Type" >
                  <option value="none">
                    -----
                  </option>
                  <option value="private">
                    private
                  </option>
                  <option value="public">
                    public
                  </option>
                  <option value="Shipping">
                    Shipping
                  </option>
                  <option value="Motorcycle">
                    Motorcycle
                  </option>
                </select>
              </div>

              <form className='hide'>
                <span className='ops'>Number of CC</span>
                <select id="Type" >
                  <option value='none'>
                    -----
                  </option>
                  <option value="1000cc">
                    1000CC
                  </option>
                  <option value="1500cc">
                    1500CC
                  </option>
                  <option value=" 2000cc">
                    2000CC
                  </option>
                  <option value="2500cc">
                    2500CC
                  </option>
                </select>
              </form>
              <form className='hide'>
                <span className='opss'>degree of insurance</span>
                <select id='degree'>
                  <option value="Mandatory">
                    Mandatory
                  </option>
                  <option value="comprehensive">
                    comprehensive
                  </option>
                  <option value="VIP">
                    VIP
                  </option>
                </select>
              </form>
              <form className='hide'>
                <span className='opss'>number of passengers</span>
                <select>
                  <option value="7">
                    7
                  </option>
                  <option value="18">
                    18
                  </option>
                  <option value="24">
                    24
                  </option>
                </select>

              </form>
              <form className='hide'>
                <span className='opss'>number of passengers</span>
                <select >
                  <option value="250cc">
                    250CC
                  </option>
                  <option value="450cc">
                    450CC
                  </option>
                  <option value="500cc">
                    500cc
                  </option>
                </select>

              </form>
              <input className='pris' id="Price" />
              <button className='bttn ' onClick={calc} >calc</button>
              <label className='Result' id='Result'>Please Enter Inputs</label>
            </div>
          </div>
        </div> : null
      }
      <button className="showPriceContent" onClick={() => setShow(!Show)} ><img src='./imgs/right-arrow.png' alt='arrow' /></button>
    </div>

  )
}

export default Price;