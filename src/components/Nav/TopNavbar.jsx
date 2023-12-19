import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { BrowserRouter as Router, Route, Switch,Link as Links } from 'react-router-dom';
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/img/logo.png";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { useDispatch } from "react-redux";
import { model } from "../../Redux/ReduxData";
import { NavLink } from 'react-router-dom';
import Logo from "../../assets/img/logo.svg";
export default function TopNavbar() {
  const [sidebarOpen, toggleSidebar] = useState(false);
  const [y, setY] = useState(window.scrollY);
  const dispatch = useDispatch()
  const path = window.location.href.split('0/')[1]
  useEffect(() => {
    
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  const emitData = () =>{
    dispatch(model({name:'data'}))
  }

  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 100) {
        document.getElementById('navbar_top').classList.add('fixed-top');
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
      }

    });
  });
  return(
    <>
  
   <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate navbar" id="navbar_top" style={y > 100 ? { height: "70px" } : { height: "70px" }}>
        <NavInner className="container flexSpaceCenter navbar-txt">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>         
            <Bounce>
             <div  style={{ padding: "5px 0 0",color:'#ffffff' }} > <img src={Logo} alt="Logo" className="img-fluid"/></div>
            </Bounce>
          </Link>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <Fade top>
          <Router>
          <UlWrapper onClick={()=>emitData()} className="flexNullCenter">
            <li className="semiBold font15 pointer">
            <a href="/"  style={{ padding: "10px 30px" }}>Home</a>
            {/* <NavLink to="/" activeClass="active" style={{ padding: "10px 30px" }}>About</NavLink> */}
              {/* <Link activeClass="active" style={{ padding: "10px 30px" }} to="/" spy={true} smooth={true} offset={-80}>
                Home
              </Link> */}
            </li>            
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 30px",color:'#ffffff' }} offset={-80}>
                Governance
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 30px",color:'#ffffff' }} offset={-80}>
              Ecosystem
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <a href="/allapps" style={{ padding: "10px 30px" }}>All Apps</a>             
            </li>
            <li className="semiBold font15 pointer">
              <a href="/bridge" style={{ padding: "10px 30px" }}>Bridge</a>             
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 30px",color:'#ffffff' }}>
              Developer
              </Link>
            </li>
          </UlWrapper> </Router>
          </Fade>
          <UlWrapperRight className="flexNullCenter">
          <Bounce>
            <li className="semiBold font15 pointer flexCenter">
              <a href="/" className="radius10 purpleBg whiteColor" style={{ padding: "18px 24px" }}>
              Connect Wallet
              </a>
            </li>
            </Bounce>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
   
    </>
  )

}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;


