import {InsuranceDepartments,ListOfFeaturesAndPrices,Footer,HomePage,Navbar } from '../../../index'



function Home() {
  return (
    <>
    <Navbar/>
    <HomePage/>
    
      <InsuranceDepartments/>
      <ListOfFeaturesAndPrices/>
    </>
   
  )
}

export default Home;