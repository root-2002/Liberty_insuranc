import React from 'react'
import './homeIns.css'

function HomeIns() {
  return (
    <div>
      <div className='Ins-Bg' id='homeInsBG'>

        <div className='bg-Info'>
          <div className='divStyle'>
            <h1 className='pageHeader'>Home Insurance</h1>
            <p className='pageHeaderpara'>Protect The Place Where Memories Are Made </p>
          </div>

        </div>
      </div>
      <div className='bgBackBone'></div>
      <div className='container insInfo'>
        <h1 className='insText'>What is home insurance?</h1>
        <p className='insText ins-Para'>Home insurance covers loss and damage to your house and household contents. For example, if your home is damaged by a flood or fire, your insurance provider could cover the cost of any repairs or replacements needed.

          There are two types of home cover: buildings insurance and contents insurance. You can buy them individually or together as a combined policy.</p>
        <div className='container d-md-flex'>
          <div class="card ins-CardsPage">
            <div class="card-body">
              <h5 class="card-title">Buildings insurance</h5>
              <p class="card-text insCardPara">Buildings insurance covers the structure of the property and its permanent fixtures and fittings. It may also cover driveways, patios, walls, fences, and any outbuildings including garages.<br /><br />

                Most mortgage providers expect you to have it. If you're renting you don't need it.</p>
            </div>
          </div>
          <div class="card ins-CardsPage">
            <div class="card-body">
              <h5 class="card-title">Contents insurance</h5>
              <p class="card-text insCardPara">Contents insurance covers damage or theft of your household items (e.g. your home appliances, furniture and jewellery).<br /><br />

                Each item is only covered up to a limited amount. You'll see this called a 'single item limit', and it's usually around $1,500 but could be higher or lower.<br /><br />

                Accidental damage and damage to items outside the home aren't covered as standard but can be for an extra cost.</p>
            </div>
          </div>
          <div class="card ins-CardsPage">
            <div class="card-body">
              <h5 class="card-title">Combined home insurance</h5>
              <p class="card-text insCardPara">A combined buildings and contents insurance policy covers the structure of your home and your belongings.<br /><br />

                If you need both, then taking out one policy with the same provider usually works out cheaper and can make things simpler if you need to make a claim (e.g. if there’s a fire it’ll be far easier reporting it all to one insurer instead of two).</p>
            </div>
          </div>

        </div>

      </div>
      <br /><br />
      <div className='imgTextIns'>
        <h1 className='insText'>How much is home insurance?</h1>
        <div className='container d-lg-flex'>
          <p>The average price paid by GoCompare customers for a combined home insurance policy is $191 a year.<br />

            Buildings-only or contents-only cover is cheaper than a combined policy, but you won't get the same level of cover.<br />

            According to our data, the average price paid for home insurance per year by cover type is:<br /><br />

            1-Buildings and contents insurance - $191<br />
            2-Buildings only insurance - $150<br />
            3-Contents only insurance - $75<br /><br />
            Things like the location, size of your house and previous claims can all impact the cost of your premium.<br /><br />
            *The average price paid for home insurance purchased in July 2022 by type of cover. For buildings and contents insurance, it was $191. For buildings insurance only, it was $150. For contents insurance only, it was $75.

          </p>
          <img src='./imgs/home.png' className='insTextImg-Img'alt =""></img>
        </div>
      </div>
      <div className='moreInfo'>
        <div className='container'>
          <h1 className='moreInfoh1'>How can I get cheaper home insurance?</h1>
          <p className='moreInfoP'><br />
            Here's eight tips that could help keep the cost of your premium down:<br /><br />1-Shop around for quotes - In the last year, 77% of people didn’t switch their home insurance to a new provider, potentially missing out on cheaper premiums.<br /><br />
            2-Buy 29 days before your policy ends - Our research shows it’ll cost around 16% less than it would to buy it the day before your existing policy renews.<br /><br />
            3-Improve your home security - Get insurer-approved locks for your home, as well as smoke and burglar alarm systems.<br /><br />
            4-Regularly maintain your home - Staying on top of things and getting repairs done early can save you money in the long run.<br /><br />
            5-Build your no-claim discount - For every year you don't make a claim, you'll likely reduce the cost of your premium.<br /><br />
            6-Don't over-insure - Overestimating the value of your contents and the rebuild cost of your home will increase your premium. But if you're in any doubt, it's better to overestimate than underestimate.<br /><br />
            7-Only pay for what you need - You'll be offered a variety of optional extras when you apply for home insurance. Remember the best home insurance policy for you is one that offers the cover you need at an affordable price.<br /><br />
            8-Pay upfront - With monthly payments, you'll have to pay interest and sometimes a finance arrangement fee, so it'll be more expensive.<br /><br />

          </p>
        </div>
      </div>
    </div>
  )
}
export default HomeIns

