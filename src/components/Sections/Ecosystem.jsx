import React from "react";
import styled from "styled-components";
import Roll from 'react-reveal/Roll';
import Bounce from 'react-reveal/Bounce';
import LightSpeed from 'react-reveal/LightSpeed';
// Components
import EcosystemTable from "../Elements/EcosystemTable";

export default function Ecosystem() {
  return (
    <Wrapper id="ecosystem">
      <div className="whiteBg">
        <div className="container">         
          <TablesWrapper className="flexSpaceNull flexCenter">
            <TableBox>
                <HeaderInfo>
                  <Roll>
                      <h1 className="font40 extraBold marginBottom-5 lineHeight60">Your thoughts and executable.</h1>
                      <div className="font20 lineHeight30">
                        Nemosis is advanced L2 on Avalanche chain and a bridge to any chains built on Tender mint blockchain consensus. It is a Quantum resistance L2 scaled on Avalanche and a portal to speed, <br/>agility and robustness.
                    </div>
                    </Roll>
              </HeaderInfo>
            </TableBox>
            
            <TableBox>
             <Bounce>
              <EcosystemTable
                title="Nemosis"
                className="darkBg"
                text="Your full service lab for clinical trials. Our mission is to ensure the generation of accurate and precise findings"
               action={() => alert("clicked")}
              />
              </Bounce>
            </TableBox>
            <TableBox>
              <Bounce>
              <EcosystemTable
                icon="browser"
                title="Nemosis"
                text="Your full service lab for clinical trials. Our mission is to ensure the generation of accurate and precise findings"
               action={() => alert("clicked")}
              />
              </Bounce>
            </TableBox>
            
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  margin-top:100px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




