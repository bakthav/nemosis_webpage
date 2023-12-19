import React from "react";
import styled from "styled-components";
import { useState } from "react";
// Components
// import bannerBg from "../../assets/img/bridge/bridge-banner-bg.png";
const StyledCard = styled.div`
  ${(props) => props.isFlex && props.flexStyles && props.flexStyles};
  background: #232531;
  color: #ffffff;
  width: 100%;
  min-width: 500px;
  height: auto;
  padding: 25px;
  margin: 0;
  border-radius: 30px;
`;
const Button = styled.button`
background: #232531;
color: #ffffff;
font-size: 1em;
padding: 0.15em 0.50em;
width:180px;
height:40px;
border-radius: 18px;
border:1px solid #000000
`;
const TextButton = styled.button`
background: #000000;
color: #ffffff;
font-size: 1em;
padding: 0.15em 0.50em;
width:180px;
height:40px;
border-radius: 18px;
border:1px solid #000000
`;
const PrimaryButton = styled.button`
background: #35329E;
color: #ffffff;
font-size: 1em;
padding: 0.25em 1em;
width:100%;
height:45px;
border-radius: 18px;
border:1px solid #35329E;
`;


export default function Bridge() {
  const [showDepbutton, setDepositButton] = useState(true);
  const [showDrawarbutton, setWidthdrawButton] = useState(false);
  const ShowDeposit = () => {
    setDepositButton(true)
    setWidthdrawButton(false)
  }
  const ShowWithdraw = () => {
    setDepositButton(false)
    setWidthdrawButton(true)
  }
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container" style={{ margin: "100px auto 0 auto" }}>
          <div className="row textCenter" style={{justifyContent:'center'}}>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <StyledCard>
                <h5 style={{ marginBottom: 20 }}>Connect Wallet</h5>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ padding: 10, marginBottom: 15, display: 'flex' }}>
                    <span>From</span>
                    <div style={{background:'#000000',borderRadius:30,marginLeft:10}}>
                      <div className="bridgeBackImg"></div>
                      <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <SpaceBetween>
                    {showDepbutton ? <Button onClick={ShowDeposit}>Deposit</Button> : <TextButton onClick={ShowDeposit}>Deposit</TextButton>}
                    {showDrawarbutton ? <Button onClick={ShowWithdraw}>Withdraw</Button> : <TextButton onClick={ShowWithdraw}>Withdraw</TextButton>}
                  </SpaceBetween>
                  <SpaceBetween>
                    <div>
                      <Label>Input</Label>
                      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div>
                      <Label>Balance:9900</Label>
                      <div style={{position:'relative',right:10,width:'84%'}}>
                      <div className="bridgeBackImg"></div>
                      <select class="form-select" aria-label="Default select example">
                        <option selected>AVAX</option>
                        <option value="1">AVAX</option>
                        <option value="2">AVAX</option>
                        <option value="3">AVAX</option>
                      </select>
                    </div>
                    </div>
                  </SpaceBetween>
                  <SpaceBetween>
                    <div>
                      <Label>Ethereum</Label>
                      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="You will receive:0 ETH" />
                    </div>
                    <div>
                      <Label>Balance:9900</Label>
                      <div style={{position:'relative',right:10,width:'84%'}}>
                      <div className="bridgeBackAvxImg"></div>
                      <select class="form-select" aria-label="Default select example">
                        <option selected>ETH</option>
                        <option value="1">ETH</option>
                        <option value="2">ETH</option>
                        <option value="3">ETH</option>
                      </select>
                    </div>
                    </div>
                  </SpaceBetween>
                  <PrimaryButton>Connect wallet</PrimaryButton>
                </div>
              </StyledCard>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const SpaceBetween = styled.div`
    background: rgb(0, 0, 0);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 30px;
    margin-bottom: 30px;
    padding:0.80em 1.50em;
`;
const Label = styled.div`
    font-size:13px;
    font-weight:400;
`;
const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;