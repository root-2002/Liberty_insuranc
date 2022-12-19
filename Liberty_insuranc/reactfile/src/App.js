import './App.css';
import { Home ,Car,NotFound ,Bank,Life,Contracts , Health, HomeIns} from './compontents/index'
import {Navbar , Footer ,Price} from './compontents/section/index'
import {BrowserRouter , Route ,Routes} from 'react-router-dom'
import { Component } from 'react';
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
        <Route path='/Bank' element={<Bank/>}/>
        <Route path='/homeIns' element={<HomeIns/>}/>
         <Route path='*' element={<NotFound/>} />
      </Routes>
    <Footer/>
    
    </BrowserRouter>

    
  
  );
}

export default App;
