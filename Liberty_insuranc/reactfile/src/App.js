import './App.css';
import { Home ,Car,NotFound ,Travel,Life,Contracts , Health, HomeIns ,Paymethod} from './compontents/index'
import {Navbar , Footer ,Price} from './compontents/section/index'
import {BrowserRouter , Route ,Routes} from 'react-router-dom'
import ScrollToTop from './compontents/section/ScrollToTheTop'

function App() {
 
  return (
 
    <BrowserRouter>
    <ScrollToTop />
      <Navbar/>
    <Price/>
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Car' element={<Car/>} />
         <Route path='/Life' element={<Life/>}/>
         <Route path='/Contracts' element={<Contracts/>}  />
         <Route path='/Health' element={<Health/>}/>
        <Route path='/Travel' element={<Travel/>}/>
        <Route path='/homeIns' element={<HomeIns/>}/>
        <Route path='/Paymethod' element={<Paymethod/>}/> 
         <Route path='*' element={<NotFound/>} />
      </Routes>
  
    <Footer/>
    
    </BrowserRouter>





  
  );
}

export default App;
