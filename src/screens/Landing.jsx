import React, { useEffect, useState } from "react";
// Sections
import { BrowserRouter , Switch,Route} from 'react-router-dom';
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Governance from "../components/Sections/Governance";
import Joinus from "../components/Sections/Joinus";
// import Bridge from "../components/Sections/Bridge";
import Ecosystem from "../components/Sections/Ecosystem";
import Developer from "../components/Sections/Developer";
import Footer from "../components/Sections/Footer"
import Routing from "./Routing";
import Bridge from "../components/Sections/Bridge";
import { useSelector } from 'react-redux';

// export default function Landing() {
//   const path = window.location.href.split('0/')[1]

//  const state = useSelector(state =>state.user.value.name)
 
//  window.addEventListener('click',()=>{
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   path = path.length > 0 ? path : '';
// })
const LandingPage = (props) => {
//  useEffect(()=>{

//  },[state])

  return (
    <>  
      <Header />
      <Services />
      <Governance />
      <Ecosystem />
      <Joinus />
      <Developer />
      <Footer />
    </>
  )
};
export default LandingPage;
