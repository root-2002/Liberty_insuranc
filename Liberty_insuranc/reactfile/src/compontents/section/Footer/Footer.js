import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div>
      <div>
        <title> </title>
        <link href="/your-path-to-fontawesome/css/all.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="style.css" />
        
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossOrigin="anonymous"
        />
        {/*socil media*/}
        <section id="social-media">
          <div className="container text-center">
            <h1>FIND US ON SOCIAL MEDIA</h1>
            <div className="social-icon">
              <a href="https://www.facebook.com/emad.selkhi.1" target="_blank" rel="noreferrer">
                <img src="/FooterPhoto/facebook-icon.png" alt="Facebook img" />
              </a>
              <a href="https://www.whatsapp.com/">
                <img src="/FooterPhoto/whatsapp-icon.png" alt="WhatsApp img"/>
              </a>
              <a href="https://www.instagram.com/emad_alselkhi/">
                <img src="/FooterPhoto/instagram-icon.png" alt="Instagram img"/>
              </a>
              <a href="https://twitter.com/ESelkhi">
                <img src="/FooterPhoto/twitter-icon.png" alt="Twitter img"/>
              </a>
            </div>
          </div>
        </section>
        {/*footer*/}
        <section id="footer">
        <img src="/FooterPhoto/wave2.png" className="footer-img"  alt="styling img "/>
          <div className="container">
            <div className="row">
              <div className="col-md-4 footer-box">
                <h5>
                  <b>CONTACT US</b>
                </h5>

                <p id="P">
                  <b>Address: </b>Palestine,Ramallah
                </p>
                <p>
                  <b>Phone: </b>+970595535907
                </p>
                <p>
                  <b>Email: </b>liberty.company.1@gmail.com
                </p>
              </div>
              <div className="col-md-4 footer-box">
                <h5>
                  <b>SUBSCRIBE</b>
                </h5>
                <p>
                    <b>
                    Don't miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </b>
                </p>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>
            <hr />
            <p className="copyright">
              Copyright 2022 Lgiprty. All Rights Reserved
            </p>
          </div>
      
        </section>
      </div>
    </div>
  );
}
