import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import './App.css';
import NavbarP from './components/nav/NavbarP';
import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Team from './components/team/Team';
import Footer from './components/footer/Footer';
import WorkHome from './components/work/WorkHome';
import ContactUs from './components/contactus/ContactUs';
import Service from './components/services/Service';
import Home from "./components/starter/Home";

function App() {
  return (
    <>
    <BrowserRouter>
      <NavbarP/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about-us" element={<About/>} />
      <Route exact path="/services" element={<Service/>} />
      <Route exact path="/ourteam" element={<Team/>} />
      <Route exact path="/ourwork" element={<WorkHome/>} />
      <Route exact path="/contact-us" element={<ContactUs/>} />
      
      
      
      
      

      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}




export default App;