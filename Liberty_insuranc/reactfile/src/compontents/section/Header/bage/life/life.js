import React from 'react'

function life() {
  return (
    <div>
      <div className='Ins-Bg' id="lifeBG">

        <div className='bg-Info'>
          <div className='divStyle'>
            <h1 className='pageHeader'>Life Insurance</h1>
            <p className='pageHeaderpara'>Help ease your mind with coverage that you and your family can rely on</p>
          </div>

        </div>
      </div>
      <div className='bgBackBone'></div>

      <br /><br />
      <div className='imgTextIns'>
        <h1 className='insText'>What is life insurance? </h1>
        <div className='container d-lg-flex'>
          <p>Life insurance can help your loved ones deal with the financial impact of your death. If you die during the length of the policy it could pay out a cash sum. If you add critical illness cover and are diagnosed with a terminal illness during your policy, you'll be covered for that too.<br />

            <h3>Why do I need it?</h3><br />

            According to our data, the average price paid for home insurance per year by cover type is:<br /><br />

            1-If you have dependants or a partner who relies on your income, it’s important to make sure they’re taken care of <br />
            2-If you have a mortgage, credit card, loan or other debt, life insurance can help your loved ones meet those financial commitments<br />
            3-You might want to consider a policy that covers funeral expenses, to ease the cost for your family<br /><br />
            Life insurance isn’t a legal requirement, but it could give your dependents financial stability when you die. Read our guide on why you need life insurance.
          </p>
          <img src='./imgs/life.png' className='insTextImg-Img' id='insLifeImg' alt=' '></img>
        </div>
      </div>
      <div className='moreInfo'>
        <div className='container'>
          <h1 className='moreInfoh1'>How much life insurance do I need and for how long?</h1>
          <p className='moreInfoP'><br />
            Deciding how much life insurance you need and how long to make the policy last for can be a difficult decision.<br /><br />Generally, the advice is to take a policy worth 10 times the highest earner’s annual salary. But the higher the amount you’re insured for, the higher your premiums.<br/>

            We’ve put together some pointers to help or you can use our calculator to get an idea of how much life insurance might be right for you.<br/>

           <br/><h3>What do you need cover for?</h3> <br/>

            It’ll help work out how long you need cover for too. If it’s for your mortgage, take out life insurance to cover your remaining mortgage term. If it’s to see your children through their education, make sure it covers you until your youngest finishes their education.<br/><br/>

           <h3> What type of cover do you want?</h3><br/>

            You’ll have to decide whether to take out level or decreasing term cover and whether you want critical illness included or not. The more extensive your cover, the more it'll cost.<br/><br/>

            <h3>Make sure you’ve covered everything you need to</h3><br/>

            It doesn’t just have to be about your mortgage, you can factor in other debts and monthly outgoings too. Things like personal loans and credit cards. Consider future costs as well. If you have children, would they need help through university? And funeral costs can be a big expense at a difficult time.<br/><br/>

            <h3>Consider Inflation</h3>

            The amount you choose might be worth less in real terms in a few decades’ time because of inflation.
          </p>
        </div>
      </div>
    </div>
  )
}

export default life