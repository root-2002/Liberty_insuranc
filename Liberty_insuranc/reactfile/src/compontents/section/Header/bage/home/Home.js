import {InsuranceDepartments,ListOfFeaturesAndPrices,HomePage } from '../../../index'



function Home() {
  return (
    <>
    
    <HomePage/>
    
      <InsuranceDepartments/>
      <ListOfFeaturesAndPrices name ="car" pris1="$1000" pris2="$5000" pris3="$2500"/>
      
    </>
   
  )
}

export default Home;