
import './App.css';
import { Container } from './compontents/index'
import {Header,InsuranceDepartments } from './compontents/section/index';
import Navbar from './compontents/section/Header/Navbar/Navbar';
import Footer from "./compontents/section/Footer/Footer";
import React from 'react';
import HomePage from './Header/HomePage/HomePage'
import NewsHomePage from './Header/HomePage/NewsHomePage'

function App() {
  return (
    <div className="App">
      <Container/>
      <Navbar/>
      <Header/>
    <HomePage />
    <InsuranceDepartments/>
    <NewsHomePage/>
    <Footer/>
    <Container/>
    </div>
  );
}

export default App;
