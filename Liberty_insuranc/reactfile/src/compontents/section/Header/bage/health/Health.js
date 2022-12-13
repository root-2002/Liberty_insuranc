import React from 'react'

function Health() {
  return (
    <div>
      <div className='Ins-Bg' id='healthBG'>

        <div className='bg-Info'>
          <div className='divStyle'>
            <h1 className='pageHeader'>Health Insurance</h1>
            <p className='pageHeaderpara'>Keeping You In Your Best Shape </p>
          </div>

        </div>
      </div>
      <div className='bgBackBone'></div>
      <div className='container insInfo'>
        <h1 className='insText'>How to get a health insurance quote and how to claim</h1>
        <p className='insText ins-Para'>
          Getting a health insurance quote online couldn’t be simpler – fill in some details, compare your policy options and pick which one is right for you.

          Claiming can be pretty straightforward too. It starts with a GP appointment to get a diagnosis and referral. Then your insurer can check it covers that condition and help you book a consultation where you’ll come up with your treatment plan.

          Your insurer will be in touch if there’s any excess to pay.
        </p>

        <div className='container d-md-flex'>
          <div class="card ins-CardsPage">
            <div class="card-body">
              <h5 class="card-title">Benefits of private health insurance</h5>
              <p class="card-text insCardPara"><br />Private health insurance has its advantages:<br /><br />

                • You can access treatment and diagnostic scans quickly<br /><br />
                • Extra support with your recovery – things like extended physiotherapy, which you might not be offered through the NHS<br /><br />
                • Access to a wider range of treatments and drugs<br /><br />
                • The freedom to choose – your hospital, consultant and facilities<br /><br />
                • Simple referrals to specialists if you need a second opinion<br /></p>
            </div>
          </div>
          <div class="card ins-CardsPage">
            <div class="card-body">
              <h5 class="card-title">Potential disadvantages of private health</h5>
              <p class="card-text insCardPara">
                <br /> But it isn’t a cure-all:<br /><br />

                • It can be expensive and the cost increases as you get older<br /><br />
                • Chronic or incurable conditions are rarely covered, and neither are injuries from some high-risk activities<br /><br />
                • Pre-existing medical conditions are rarely covered. If you want cover for one, it’ll cost a lot more<br /><br />
                • There’s no guarantee you’ll get access to a particular treatment or drug, or that unconventional treatments will be covered by your policy<br /><br />
              </p>
            </div>
          </div>
        </div>

      </div>
      <br /><br />
      <div className='imgTextIns'>
        <h1 className='insText'>What is health insurance?</h1>
        <div className='container d-lg-flex'>
          <p><br/>Health insurance helps cover the cost of private treatment for pre-agreed conditions.<br/><br/>

You'll sometimes hear it called private medical insurance (PMI), but in most cases the product is the same – although exactly what's covered will vary from policy to policy.<br/><br/>

You’ll pay a monthly or annual premium and when you need to access private medical care, your insurance policy will cover some or all of these costs.<br/><br/>

Double check you don’t already have health insurance through your employer before taking out your own cover. Some companies offer private healthcare as part of a benefits package. It tends to be for the employee only, but sometimes it extends to your family too.<br/><br/>
          </p>
          <img src='./imgs/healthy-Family.png' className='insTextImg-Img' id="family-helth" alt=""></img>
        </div>
      </div>
      <div className='moreInfo'>
        <div className='container'>
          <h1 className='moreInfoh1'>How does private health insurance work?</h1>
          <p className='moreInfoP'><br />
          
You might think you don't need private health insurance if you’re entitled to treatment on the NHS. But PMI works alongside your NHS treatment, giving you faster access to a greater range of treatments.<br /><br />

You’ll pay monthly or yearly premiums and choose your excess at the outset. The excess is the amount you agree to pay towards your treatment cost.<br /><br />

For example, if your excess is £100 and you have a treatment costing £500, your insurance will cover £400 and you’ll pay the £100 excess yourself.<br /><br />

<h2>How to access private treatment</h2><br />
If you get ill, you’ll need to make an appointment with your GP first.<br /><br />

Tell your GP that you have private medical insurance. They’ll be able to refer you for any private treatment that’s available under your policy.<br /><br />

How much will a private medical insurance policy cost?<br /><br />
This depends on your personal circumstances and the level of cover you need.<br /><br />

Your personal circumstances include things like your age, whether you smoke or vape, where you live and your medical history.<br /><br />

Whether you choose a basic, medium or comprehensive policy, your voluntary excess and how many nominated hospitals you choose will all affect the price too. <br /><br />

You might be able to bring your premium down by choosing a six-week wait option on your policy. This means that if the NHS waiting list is less than six weeks for the treatment you need, you’ll have it done on the NHS instead.<br /><br />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Health;