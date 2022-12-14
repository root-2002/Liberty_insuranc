import React from 'react'

function Bank() {
  return (
    <div>
      <div className='Ins-Bg' id='bankInsBG'>

        <div className='bg-Info'>
          <div className='divStyle'>
            <h1 className='pageHeader'>Bank Insurance</h1>
            <p className='pageHeaderpara'>Invest Into Your Future</p>
          </div>

        </div>
      </div>
      <div className='bgBackBone'></div>
      <div className='container insInfo'>
        <h1 className='insText'>What Is Bank Insurance?</h1>
        <p className='insText ins-Para'>Its purpose is to insure bank deposits against loss and to regulate banking practices.</p>
        <div className='container d-md-flex'>
          <div class="card ins-CardsPage">
            <div class="card-body">
              <h5 class="card-title">Bank Insurance Coverage Includes</h5>
              <p class="card-text insCardPara">
              <br/>   • Checking accounts <br/><br/>
• Negotiable Order of Withdrawal (NOW) accounts <br/><br/>
• Savings accounts <br/><br/>
• Money market deposit accounts (MMDAs) <br/><br/>
• Time deposits such as certificates of deposit (CDs) <br/><br/>
• Cashier's checks, money orders, and other official items issued by a bank <br/><br/>
</p>
            </div>
          </div>
          <div class="card ins-CardsPage">
            <div class="card-body">
              <h5 class="card-title">Bank Insurance Coverage Does Not Include </h5>
              <p class="card-text insCardPara"><br/>
              • Stock investments<br/><br/>
• Bond investments<br/><br/>
• Mutual funds<br/><br/>
• Life insurance policies<br/><br/>
• Annuities<br/><br/>
• Municipal securities<br/><br/>
• Safe deposit boxes or their contents<br/><br/>
• U.S. Treasury bills, bonds, or notes<br/><br/></p>
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

export default Bank