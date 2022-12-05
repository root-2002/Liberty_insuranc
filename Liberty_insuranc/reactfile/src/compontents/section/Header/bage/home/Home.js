import {InsuranceDepartments,ListOfFeaturesAndPrices,Footer,HomePage,NewsHomePage,Navbar } from '../../../index'



function Home() {
  return (
    <>
    <Navbar/>
    <HomePage/>
    
      <InsuranceDepartments/>
      <ListOfFeaturesAndPrices/>
      <NewsHomePage/>
    </>
   
  )
}

export default Home;