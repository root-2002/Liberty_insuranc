import {InsuranceDepartments,ListOfFeaturesAndPrices,HomePage } from '../../../index'



function Home() {
  return (
    <div>
    
    <HomePage/>
      <InsuranceDepartments/>
      <ListOfFeaturesAndPrices name ="car" pris1="$1000" pris2="$5000" pris3="$2500"/>
      
    </div>
   
  )
}

export default Home;