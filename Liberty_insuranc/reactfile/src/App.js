import './App.css';
import { Container } from './compontents/index'
import {Header,InsuranceDepartments ,Footer } from './compontents/section/index';
import Navbar from './compontents/section/Header/Navbar/Navbar';

function App() {
  return (
    <>
    <Header>
     <Navbar/>
    </Header>
    <Container>
      <InsuranceDepartments/>
    </Container>
    <Footer/>
    </>
  );
}

export default App;
