import React from 'react'
import './NewsHomePage.css'
import Card from 'react-bootstrap/Card';


export default function NewsHomePage() {
  return (
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@200&family=Baloo+Chettan+2:wght@800&family=Inter:wght@200&display=swap" rel="stylesheet"></link>

    
      <div className="container d-flex p-2" id="con1">
        <h1>Latest News </h1>
      
      </div>
      <div className="container d-sm-flex p-2">
      <div className="container d-flex p-2" id="con2">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./imgs/News1.png" />
      <Card.Body>
        <Card.Title className='cards'>Liberty Insurance Gets 20000 MSI Global Award</Card.Title>
        <Card.Text className='cards'>
        Liberty Insurance is Filled with joy after getting the 20000 MSI Global Award , congrats Liberty Insurance
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className="container d-flex p-2" id="con3">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./imgs/News4.png" />
      <Card.Body>
        <Card.Title className='cards'>Liberty Insurance and Freedom Bank signs Comprehensive insurance services</Card.Title>
        <Card.Text className='cards'>
         Today we are sure that Freedom bank is in Safe Hands.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className="container d-flex p-2" id="con4">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./imgs/News3.png" />
      <Card.Body>
        <Card.Title className='cards'>Liberty Insurance Compensates Rolex inc. With a check of 467.000$ after 3-Days of an accident </Card.Title>
        <Card.Text className='cards'>
         SomeHow I Wish I was working there , hell I would break my leg every day 
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className="container d-flex p-2" id="con5">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./imgs/News2.png" />
      <Card.Body>
        <Card.Title className='cards'>Liberty Insurance and The Bank of 1-State Released New services to make transitions easier on new clients  </Card.Title>
        <Card.Text className='cards'>
          The Owner of Liberty Insurance says "if you believe there is 2 states in palstine , you are not a client "
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    </div>
    </div>
  )
}
