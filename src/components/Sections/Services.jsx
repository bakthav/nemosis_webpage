import React from "react";
import styled from "styled-components";
// Components
// import ClientSlider from "../Elements/ClientSlider";
// import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets

import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";


export default function Services() {
  return (
    <Wrapper id="services">
      {/* <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div> */}
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container textCenter">
          <HeaderInfo>
          <Zoom left>
            <h1 className="font40 extraBold" style={{ padding: "35px 0" }}>Unleash your imagination with Nemosis.</h1>
           </Zoom>
            <Flip left>
            <p className="font20 lineHeight40">
                Nemosis is advanced L2 on Avalanche chain and a bridge to any chains built on Tender mint blockchain <br/> consensus. It is a Quantum resistance L2 scaled on Avalanche and a portal to speed, <br/>agility and robustness.
            </p>
            </Flip>
          </HeaderInfo>
          <Zoom left>
            <ButtonsRow className="flexCenter" style={{ margin: "30px 0 60px" }}>
              <div style={{ width: "300px" }}>
                <FullButton title="Explorer the Ecosystem" />
              </div>
              <div style={{ width: "", marginLeft: "15px" }}>
                <FullButton title="Leran More About Nemosis"  border />
              </div>
            </ButtonsRow>
            </Zoom>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;