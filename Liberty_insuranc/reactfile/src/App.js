
import './App.css';
import { Container } from './compontents/index'
import {Header,InsuranceDepartments } from './compontents/section/index';
import Navbar from './compontents/section/Header/Navbar/Navbar';
import Footer from "./compontents/section/Footer/Footer";

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
