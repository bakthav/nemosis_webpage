import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Particle from "../particles/Particles";

export default function Header() {
  return (
    <Wrapper id="home" className="bannerBg">
      {/* particale js here */}
      <Particle />
      {/* particale js End */}
      <div className="container">
      <LeftSide className="flexCenter ">
        <div>
        <Zoom>
          <HeaderP className="font30 whiteColor" style={{ margin: "100px 0px 0px" }}>
            Nemosis is advanced L2 on Avalanche chain and a bridge to any chains built on Tender mint blockchain consensus. It is a Quantum resistance L2 scaled on Avalanche and a portal to speed, agility and robustness.
          </HeaderP>
          </Zoom>
          <Fade left>
          <ButtonsRow className="flexNullCenter flexWrap">
                <div style={{ width: "250px", margin: "10px 0px 16px" }}>
                  <FullButton title="Learn More"  />
                </div>
                <div  style={{ width: "250px", margin: "10px 0px 16px", borderColor:'#fff',color:'#fff', marginLeft: "15px",  }}>
                  <FullButton title="Bridge to Nemosis"  borderLight className="banner-btn" />
                </div>
              </ButtonsRow>
         </Fade>
        </div>
      </LeftSide>
      </div>
      
      <div className="bottom-wrap">
      <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
        <div className="bottomBg"></div>
       
      </div>
    </Wrapper>
  );
}

const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;

const Wrapper = styled.section`
  padding-top: 20px;
  width: 100%;
  min-height:767px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width:60%;
  height: 100%;
  line-height:30px;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const HeaderP = styled.div`
  padding:40px 0px;
  line-height:50px;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
