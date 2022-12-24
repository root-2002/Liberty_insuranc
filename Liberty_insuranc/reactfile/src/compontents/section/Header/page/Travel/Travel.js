import React from 'react'


function Bank() {
  
  return (
    <div>
      <div className='Ins-Bg' id="travelBG">

        <div className='bg-Info'>
          <div className='divStyle'>
            <h1 className='pageHeader'>Bank Insurance</h1>
            <p className='pageHeaderpara'>Invest Into Your Future</p>
          </div>

        </div>
      </div>
      <div className='bgBackBone'></div>
      <div className='container insInfo'>
        <h1 className='insText'>What does travel insurance cover?</h1>
        <p className='insText ins-Para'>What’s included in your travel insurance policy will vary by provider. Check your policy terms and conditions to be sure.</p>
        <div className='container d-md-flex'>
          <div class="card ins-CardsPage">
            <div class="card-body">
              <h5 class="card-title">Bank Insurance Coverage Includes</h5>
              <p class="card-text insCardPara">
              <br/>  • Cost of emergency visits to the doctor or hospital for medical treatment. <br/><br/>
• Repatriation to the UK if you're seriously ill or injured abroad.<br/><br/>
• Having to cancel or cut short your trip for reasons outside your control.<br/><br/>
• Cover for stolen or lost luggage, which can also include cover for passports or cash.<br/><br/>
• Legal expenses if you injure someone or damage their property.<br/><br/>
• Cover for delayed outbound or inbound journeys.<br/><br/>
</p>
            </div>
          </div>
          <div class="card ins-CardsPage">
            <div class="card-body">
              <h5 class="card-title">• Bank Insurance Coverage Does Not Include </h5>
              <p class="card-text insCardPara"><br/>• Pre-existing medical conditions not disclosed to insurer.<br/><br/>
• Lost phones, cameras, clothes or jewellery left in a non-secure location.<br/><br/>
• Dangerous activities such as extreme or winter sports.<br/><br/>
• Destinations the UK government suggests you avoid.<br/><br/>
• Claims due to excessive alcohol or drug consumption.<br/><br/>
• Injury or loss due to terrorism or natural disasters.<br/><br/>
</p>
            </div>
          </div>

        </div>

      </div>
      <br /><br />
      <div className='imgTextIns'>
        <h1 className='insText'>Why is travel insurance important?</h1>
        <div className='container d-lg-flex'>
          <p>
Travel insurance is designed to cover unexpected costs while you're travelling or on holiday. <br/><br/>

For instance, if you had an accident on holiday and needed medical treatment, your travel insurer could help cover the cost of your medical bills.<br/><br/>

Standard policies usually cover lost luggage, medical care and delayed travel. Cover for things like activities, gadgets and passports are usually available as a policy add-on.<br/><br/>

          </p>
          <img src='./imgs/TravelOldMan.png' className='insTextImg-Img'alt =""></img>
        </div>
      </div>
      <div className='moreInfo'>
        <div className='container'>
          <h1 className='moreInfoh1'>Do I need travel insurance?</h1>
          <p className='moreInfoP'><br/>•  Travel insurance isn't a legal requirement, but it could give you peace of mind if you're travelling abroad. Especially if you’re going somewhere that has no free healthcare.<br/><br/>

•  According to National Accident Helpline, treating a broken leg in the USA could cost you £25,550 in medical expenses[2]. Without travel insurance you'd be liable to cover these costs yourself.<br/><br/>

•  Some countries need you to have travel insurance with Covid-19 cover to enter. Check the countries entry requirements before you travel.<br/><br/>
          </p>
          <h1 className='moreInfoh1'>Travelling with serious pre-existing medical conditions</h1>
          <p className='moreInfoP'><br/>
          •  You must declare any pre-existing medical conditions to your insurer so it can be factored into their risk assessment. Insurers will either exclude certain medical conditions from cover altogether or include them but at an extra cost.<br/><br/>

•  It can be tricky to find an insurer that will cover more serious medical conditions, but there’s usually specialist cover available.<br/><br/>

•  If you don’t declare your medical condition and make a claim because of it, your insurer can reject the claim. It might also be unwilling to provide you with travel insurance again in the future.<br/><br/>

•  Some travel insurers we compare can give you quotes for policies that cover many serious medical conditions.<br/><br/>

•  For more extreme medical conditions, Money Helper's directory of insurers may be able to provide a quote over the phone.<br/><br/>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Bank