import { getByTitle } from '@testing-library/react'
import { type } from '@testing-library/user-event/dist/type'
import React, { useState } from 'react'
import './Price.css'
function Price() {
  const [Show, setShow] = useState(true)
  const addclass = () => {
    let Type = document.querySelectorAll("select");
    let Form = document.querySelectorAll("form");
    let license = document.querySelector("#typeoflinc");
    if (Type[0].value === "private") {
      license.innerHTML = "license :" + Type[0].value;
      Type[0].classList.add("hide")
      Form[1].classList.remove("hide");
    }
    if (Type[0].value === "public") {
      license.innerHTML = "license :" + Type[0].value;
      Type[0].classList.add("hide")
      Form[1].classList.remove("hide");
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

    let Type = document.querySelectorAll("select");
    let price = document.querySelector("#Price").value;
    let Result =document.querySelector("#Result");
    Result.innerHTML="hahaha"
    if (Type[0].value === "private") {


      if (Type[2].value === "Mandatory") {
        console.log(price);
      }
      if (Type[2].value === "comprehensive") {
        console.log(price);
      }
      if (Type[2].value === "VIP") {
        console.log(price);
      }

    }
    if (Type[0].value === "public") {

      if (Type[2].value === "Mandatory") {
        console.log(price);
      }
      if (Type[2].value === "comprehensive") {
        console.log(price);
      }
      if (Type[2].value === "VIP") {
        console.log(price);
      }

    }
    if (Type[0].value === "Shipping") {

      if (Type[2].value === "Mandatory") {
        if (Type[3].value === "7") {
          console.log(price);
        }
        if (Type[3].value === "18") {
          console.log(price);
        }
        if (Type[3].value === "24") {
          console.log(price);
        }

      }
      if (Type[2].value === "comprehensive") {
        if (Type[3].value === "7") {
          console.log(price);
        }
        if (Type[3].value === "18") {
          console.log(price);
        }
        if (Type[3].value === "24") {
          console.log(price);
        }
      }
      if (Type[2].value === "VIP") {
        if (Type[3].value === "7") {
          console.log(price);
        }
        if (Type[3].value === "18") {
          console.log(price);
        }
        if (Type[3].value === "24") {
          console.log(price);
        }
      }

    }
    if (Type[0].value === "Motorcycle") {

      if (Type[2].value === "Mandatory") {
        if (Type[4].value === "250cc") {
          console.log(price);
        }
        if (Type[4].value === "450cc") {
          console.log(price);
        }
        if (Type[4].value === "500cc") {
          console.log(price);
        }


      }
      if (Type[2].value === "comprehensive") {
        if (Type[4].value === "250cc") {
          console.log(price);
        }
        if (Type[4].value === "450cc") {
          console.log(price);
        }
        if (Type[4].value === "500cc") {
          console.log(price);
        }
      }
      if (Type[2].value === "VIP") {
        if (Type[4].value === "250cc") {
          console.log(price);
        }
        if (Type[4].value === "450cc") {
          console.log(price);
        }
        if (Type[4].value === "500cc") {
          console.log(price);
        }
      }

    }

  }
  return (
    <div className='price'>
      {
        Show ? <div className='price-container'>
          <div className='calc'>
            <div onClick={addclass} className='la'>
              <span className='ops' id='typeoflinc'>Type of license</span>
              <div className="op">
                <select name='type' id="Type" >
                  <option>
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
                  <option>
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
                <select value="7">
                  <option>
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
                <select value="250cc">
                  <option>
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
              <label className='Result' id='Result'>----</label>
            </div>
          </div>
        </div> : null
      }
      <button onClick={() => setShow(!Show)} ><img src='./imgs/right-arrow.png' alt='arrow' /></button>
    </div>

  )
}

export default Price;