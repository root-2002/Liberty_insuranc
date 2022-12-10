import React,{useState} from 'react'
import './Price.css'
function Price() {
    const  [Show,setShow] = useState(true)
    const calc=()=>
    {
      let model = document.getElementById("model").Value;
      alert(model);
    }
  return (
   <div className='price'>
    {
        Show?<div className='price-container'>
           <div className='calc'>
            <div className='la'>
            <label for="prand" className='iner'>prand</label>
           <input id="prand"/>
           <label for="model" className='iner'>model</label>
           <input id="model" />
           <button className='bttn' onClick={calc}>calc</button>
           <label className='Result'>+65265</label>
           </div>
           </div>
        </div>:null
    }
    <button  onClick={()=>setShow(!Show)} ><img src='./imgs/right-arrow.png' alt='arrow'/></button>
   </div>

  )
}

export default Price