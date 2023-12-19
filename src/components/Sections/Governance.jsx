import React from "react";
import styled from "styled-components";
import Bounce from 'react-reveal/Bounce';
// Components
// Assets


export default function Governance() {
  return (
    <Wrapper id="governance">
      <div className="darkBg">
        <div className="container">
       
          <div className="row textCenter" >
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <Bounce>
              <div className="project-count" style={{ margin: "80px 0"}}>
                <div className="font60 extraBold">$3B+</div>
                <div className="font20">Gas fees saved</div>
              </div>
              </Bounce>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <Bounce>
              <div className="project-count" style={{ margin: "80px 0"}}>
                  <div className="font60 extraBold">$2B+</div>
                <div className="font20">On-chain value</div>
              </div>
              </Bounce>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <Bounce>
                <div className="project-count" style={{ margin: "80px 0"}}>
                  <div className="font60 extraBold">$141M+</div>
                  <div className="font20">Transactions on  Nemos</div>
                </div>
              </Bounce>
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

