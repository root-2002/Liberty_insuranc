
import './App.css';
import { Home ,Car,NotFound ,SignIn ,SignUP,Bank,Life,Contracts , Health} from './compontents/index'
import {BrowserRouter , Route ,Routes} from 'react-router-dom'
function App() {
  return (
 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Car' element={<Car/>} />
        <Route path='/SignIn' element={<SignIn/>}/>
         <Route path='/Life' element={<Life/>}/>
         <Route path='/Contracts' element={<Contracts/>}/>
         <Route path='/Health' element={<Health/>}/>
        <Route path='/Bank' element={<Bank/>}/>
        <Route path='/SignUP' element={<SignUP/>}/>
         <Route path='*' element={<NotFound/>} />
      </Routes>
    
    </BrowserRouter>
    
  
  );
}

export default App;
