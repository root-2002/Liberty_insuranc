
import './App.css';
import { Home ,Car,NotFound} from './compontents/index'
import {BrowserRouter , Route ,Routes} from 'react-router-dom'
function App() {
  return (
 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Car' element={<Car/>} />
         <Route path='*' element={<NotFound/>} />

      </Routes>
    
    </BrowserRouter>
    
  
  );
}

export default App;
