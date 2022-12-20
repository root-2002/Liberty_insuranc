import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import "./assets/css/style.css";

function Paymethod() {
  return (
    <div className="paymethod">
      <div class="container">

<form action="">

<div class="row">

    <div class="col">

        <h3 class="title">billing address</h3>
        <div class="inputbox">
            <span>full name :</span>
            <input type="text" placeholder="Mohamad"></input>
        </div>

        <div class="inputbox">
            <span>email :</span>
            <input type="email" placeholder="example@example.com"></input>
        </div>

        <div class="inputbox">
            <span>address :</span>
            <input type="text" placeholder="room-street- location"></input>
        </div>
        <div class="inputbox">
            <span>city :</span>
            <input type="text" placeholder="nablus"></input>
        </div>
       <div class="flex">
        <div class="inputbox">
            <span>state :</span>
            <input type="text" placeholder="Palestine"></input>
        </div>
        <div class="inputbox">
            <span>ZIP code :</span>
            <input type="text" placeholder="47465 798542"></input>
        </div>

       </div>

    </div>

    <div class="col">

        <h3 class="title">payment</h3>
        <div class="inputbox">
            <span>cards accepted:</span>
            <div class="credit">
                <img src="./imags/pm.png" alt=""></img>
            </div>
        </div>

        <div class="inputbox">
            <span>name on card  :</span>
            <input type="text" placeholder="mr. Mohamad"></input>
        </div>

        <div class="inputbox">
            <span>card number:</span>
            <input type="number" placeholder="1234-5678-2222-5555"></input>
        </div>
        <div class="inputbox">
            <span>exp month:</span>
            <input type="text" placeholder="may"></input>
        </div>
       <div class="flex">
        <div class="inputbox">
            <span>exp year:</span>
            <input type="number" placeholder="2022"></input>
        </div>
        <div class="inputbox">
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

export default paymethod;
