import React from "react";
import styled from "styled-components";
import Roll from 'react-reveal/Roll';
import Zoom from 'react-reveal/Zoom';
// Assets
import ContactImg1 from "../../assets/img/rhs-banner.svg";

export default function Developer() {
  return (
    <Wrapper id="developer">
      <div className="lightBg">
        <div className="container">
       
          <div className="row flexCenter" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <HeaderInfo>
              <Roll left>
                <h1 className="font40 extraBold" style={{ padding: "35px 0" }}>your thoughts and executable.</h1>
                  <p className="font20 lineHeight40">
                Nemosis is advanced L2 on Avalanche chain and a bridge to any chains built on Tender mint blockchain consensus. It is a Quantum resistance L2 scaled on Avalanche and a portal to speed, agility and robustness.
                </p>
              </Roll>
            </HeaderInfo>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
           
              <div style={{ width: "100%"}} className="rotate">
              <Zoom left>
                <div style={{ marginTop: "50px"}}>
                  <img src={ContactImg1} alt="office" className="img-fluid"/>
                </div>
                </Zoom>
              </div>
             
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
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #FF0420;
  background-color: #FF0420;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #FF0420;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









