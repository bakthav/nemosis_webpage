import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import Bounce from 'react-reveal/Bounce';
// Assets
import LogoImg from "../../assets/svg/Logo";

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="darkBg whiteColor">
        <div className="container">
        <div className="row" >
            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
            <Bounce>
              <div style={{ margin: "80px 0"}}>
                <div className="font20 extraBold" style={{ padding: "0px 0 10px"}}>Superchain</div>
                <ul className="lineHeight30">
                  <li><div className="font14">Contact Us</div></li>
                  <li><div className="font14">Help & About us</div></li>
                  <li><div className="font14">Contact</div></li>
                  <li><div className="font14">Contact</div></li>
                </ul>
              </div>
              </Bounce>
            </div>
            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
            <Bounce>
            <div style={{ margin: "80px 0"}}>
                <div className="font20 extraBold" style={{ padding: "0px 0 10px"}}>About</div>
                <ul className="lineHeight30">
                  <li><div className="font14">Contact Us</div></li>
                  <li><div className="font14">Help & About us</div></li>
                  <li><div className="font14">Contact</div></li>
                  <li><div className="font14">Contact</div></li>
                </ul>
              </div>
              </Bounce>
            </div>
            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <Bounce>
              <div style={{ margin: "80px 0"}}>
                <div className="font20 extraBold" style={{ padding: "0px 0 10px"}}>Optimism</div>
                <ul className="lineHeight30">
                  <li><div className="font14">Home</div></li>
                  <li><div className="font14">Governance</div></li>
                  <li><div className="font14">Bridge</div></li>
                </ul>
              </div>
              </Bounce>
            </div>
            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <Bounce>
              <div style={{ margin: "80px 0"}}>
                <div className="font20 extraBold" style={{ padding: "0px 0 10px"}}>Developers</div>
                <ul className="lineHeight30">
                  <li><div className="font14">Documentation</div></li>
                  <li><div className="font14">Block explorer</div></li>
                  <li><div className="font14">Status</div></li>
                </ul>
              </div>
              </Bounce>
            </div>
          </div>
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <h1 className="font15 extraBold whiteColor">
                NEMOSIS
              </h1>
            </Link>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} - <span className="purpleColor font13">Nemosis</span> All Right Reserved
            </StyleP>

            <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
              Back to top
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;