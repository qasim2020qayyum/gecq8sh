import React from 'react'
import About from '../about/About'
import ContactUs from '../contactus/ContactUs'
import Header from '../header/Header'
import Service from '../services/Service'
import Team from '../team/Team'
import WorkHome from '../work/WorkHome'

const Home = () => {
  return (
    <>
    <Header/>
    <About/>
    <Service/>
    <Team/>
    <WorkHome/>
    <ContactUs/>
    </>
  )
}

export default Home