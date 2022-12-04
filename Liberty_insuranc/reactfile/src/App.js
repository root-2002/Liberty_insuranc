
import './App.css';
import { Home ,Car,NotFound ,SignIn ,SignUP} from './compontents/index'
import {BrowserRouter , Route ,Routes} from 'react-router-dom'
function App() {
  return (
 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Car' element={<Car/>} />
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/SignUP' element={<SignUP/>}/>
         <Route path='*' element={<NotFound/>} />

      </Routes>
    
    </BrowserRouter>
    
  
  );
}

export default App;
