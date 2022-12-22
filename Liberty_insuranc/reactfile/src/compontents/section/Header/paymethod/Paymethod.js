import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import "./paymethod.css";

function Paymethod() {
  return (
    <div className="paymethod">
      <div class="container payCon">

<form className="payForm1"action="">

<div className="payrow">

    <div className="col Paying">

        <h3 className="title ">billing address</h3>
        <div className="inputbox">
            <span>full name :</span>
            <input type="text" placeholder="Mohamad"></input>
        </div>

        <div className="inputbox">
            <span>email :</span>
            <input type="email" placeholder="example@example.com"></input>
        </div>

        <div className="inputbox">
            <span>address :</span>
            <input type="text" placeholder="room-street- location"></input>
        </div>
        <div className="inputbox">
            <span>city :</span>
            <input type="text" placeholder="nablus"></input>
        </div>
       <div className="flex">
        <div className="inputbox">
            <span>state :</span>
            <input type="text" placeholder="Palestine"></input>
        </div>
        <div className="inputbox">
            <span>ZIP code :</span>
            <input type="text" placeholder="47465 798542"></input>
        </div>

       </div>

    </div>

    <div className="col Paying">

        <h3 className="title">payment</h3>
        <div className="inputbox">
            <span>cards accepted:</span>
            <div className="credit">
                <img src="./imgs/pm.png" alt=""></img>
            </div>
        </div>

        <div className="inputbox">
            <span>name on card  :</span>
            <input type="text" placeholder="mr. Mohamad"></input>
        </div>

        <div className="inputbox">
            <span>card number:</span>
            <input type="number" placeholder="1234-5678-2222-5555"></input>
        </div>
        <div className="inputbox">
            <span>exp month:</span>
            <input type="text" placeholder="may"></input>
        </div>
       <div className="flex">
        <div className="inputbox">
            <span>exp year:</span>
            <input type="number" placeholder="2022"></input>
        </div>
        <div className="inputbox">
            <span>CVV :</span>
            <input type="text" placeholder="111"></input>
        </div>

       </div>

    </div>

</div>

<input type="submit"  value="proceed to checkout" class="submit-btn"></input>

</form>
</div>

    </div>
  );
}

export default Paymethod;

