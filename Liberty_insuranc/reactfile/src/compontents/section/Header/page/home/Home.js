import {InsuranceDepartments,ListOfFeaturesAndPrices,HomePage,Review } from '../../../index'



function Home() {
  return (
    <div className='container-home'>
    
    <HomePage/>
      <InsuranceDepartments/>
      <Review/>      
    </div>
   
  )
}

export default Home;