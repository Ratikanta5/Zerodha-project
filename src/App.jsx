import './App.css'
import {  Routes, Route } from "react-router-dom";

import HomePage from './landing_page/home/HomePage';
import SignUpPage from './landing_page/signup/SignUpPage';
import About from './landing_page/about/About';
import ProductPage from './landing_page/products/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import NotFound from "./landing_page/NotFound"

import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';




function App() {

  return (
    <>
    <Navbar/>
     <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/pricing' element={<PricingPage/>}/>
        <Route path='/support' element={<SupportPage/>}/>
        <Route path='*' element={<NotFound/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
