import React from "react";
import styled from "styled-components";
import Zoom from 'react-reveal/Zoom';
// Components
import FullButton from "../Buttons/FullButton";

// Assets


export default function Joinus() {
  return (
    <Wrapper id="developer">
      <div className="darkBg">
      <div className="container textCenter">
          <HeaderInfo>
          <Zoom>
            <div className="row">
              <div className="col-md-8 mx-auto"> 
              <h1 className="font40 extraBold whiteColor" style={{ padding: "35px 0" }}>Imagination with Nemosis.</h1>
              <p className="font20 whiteColor lineHeight40">
              Nemosis is advanced L2 on Avalanche chain and a bridge to any chains built on Tender mint blockchain consensus. It is a Quantum resistance L2 scaled on Avalanche and a portal to speed, agility and robustness.
              </p>
              </div>
            </div>
          </Zoom>
          </HeaderInfo>
          <div className="flexCenter">
          <div style={{ width: "300px", margin: "50px 0 90px" }} >
                  <FullButton title="Join us on Discord"/>
           </div>
           </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
padding-top:50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;