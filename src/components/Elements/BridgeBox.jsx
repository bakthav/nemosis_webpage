import React from "react";
import styled from "styled-components";
import icon1 from "../../assets/img/bridge/icon-1.png";
import liveIcon from "../../assets/img/bridge/live-star.svg";
export default function BridgeBox({ title, text, action }) {
  return (
    <WrapperBtn className="animate pointer" onClick={action ? () => action() : null}>
      <Wrapper className="whiteBg radius27 shadow">
        <div className="flex flexNullCenter flex-end ">
          <div> <img src={liveIcon} alt="office" className="img-fluid"/></div>
          <div className="font16 primaryColor">Live Incentives</div>
        </div>
        <div className="textCenter">
          <img src={icon1} alt="office" className="img-fluid"/>
          <h3 className="font20 extraBold mb-0 bridge-title">{title}</h3>
          <div>app.lyra.finance</div>
        </div>        
        <p className="bridge-txt" style={{ padding: "30px 0" }}>
          {text}
        </p>
      </Wrapper>
    </WrapperBtn>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;
const WrapperBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  :hover {
    opacity: 0.5;
  }
`;
