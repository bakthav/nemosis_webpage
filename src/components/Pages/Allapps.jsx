import React from "react";
import styled from "styled-components";
// Components
import BridgeBox from "../Elements/BridgeBox";
import icon1 from "../../assets/img/bridge/icon-1.png";
import liveIcon from "../../assets/img/bridge/live-star.svg";

export default function Allapps() {
  const AllappsData =[
    { 
      id:1,
      name:'FROST',
      description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      url:'app.lyra.finance',
      iconImage:liveIcon
    },
    {
      id:2,
      name:'GLIDE',
      description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      url:'app.lyra.finance',
      iconImage:liveIcon
    },
    {
      id:3,
      name:'ICICLE',
      description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      url:'app.lyra.finance',
      iconImage:liveIcon
    },
    {
      id:4,
      name:'DEW',
      description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      url:'app.lyra.finance',
      iconImage:liveIcon
    },
    {
      id:5,
      name:'EVEREST',
      description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      url:'app.lyra.finance',
      iconImage:liveIcon
    },
    {
      id:6,
      name:'ICEBOARD',
      description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      url:'app.lyra.finance',
      iconImage:liveIcon
    },
    {
      id:7,
      name:'SNOW LEPOARD ',
      description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      url:'app.lyra.finance',
      iconImage:liveIcon
    },
    {
      id:8,
      name:'GLACIER',
      description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      url:'app.lyra.finance',
      iconImage:liveIcon
    },
    {
      id:9,
      name:'BREEZE',
      description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      url:'app.lyra.finance',
      iconImage:liveIcon
    },
    {
      id:10,
      name:'VAPOUR',
      description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      url:'app.lyra.finance',
      iconImage:liveIcon
    }
  ]
  const rows=[]

  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container" style={{margin:"100px auto 0 auto"}}>
          <div className="bridge-banner-sec flexNullCenter">
          <HeaderInfo >
            <h1 className="font40 extraBold">Nemosis ecosystem</h1>
            <p className="font16" style={{margin:"20px auto 0 auto"}}>
                An overview of the apps and integrations in the <br/> Optimism ecosystem.
            </p>
          </HeaderInfo>
          </div>  
         <ul className="filterList flexNullCenter mobileScroll" style={{margin:"50px 0 30px"}}>
            <li className="font13 pointer">
             <a href="/"  style={{ padding: "10px 30px",borderColor:'red',color:'red' }}>All apps</a>
           </li>
           <li className="font13 pointer">
             <a href="javascript:;"  style={{ padding: "10px 30px" }}>Incentive</a>
           </li>
           <li className="font13 pointer">
             <a href="javascript:;"  style={{ padding: "10px 30px" }}>New toweb3</a>
           </li>
           <li className="font13 pointer">
             <a href="javascript:;"  style={{ padding: "10px 30px" }}>DeFi</a>
           </li>
           <li className="font13 pointer">
             <a href="javascript:;"  style={{ padding: "10px 30px" }}>NFT</a>
           </li>
           <li className="font13 pointer">
             <a href="javascript:;"  style={{ padding: "10px 30px" }}>Bridge</a>
           </li>
           <li className="font13 pointer">
             <a href="javascript:;"  style={{ padding: "10px 30px" }}>On-ramp</a>
           </li>
           <li className="font13 pointer">
             <a href="javascript:;"  style={{ padding: "10px 30px" }}>Wallet</a>
           </li>
           <li className="font13 pointer">
             <a href="javascript:;"  style={{ padding: "10px 30px" }}>Tool</a>
           </li>
         </ul>
          <div className="row textCenter">
            {AllappsData.map((app, index) => (
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" key={index}>
              <Wrapper className="whiteBg radius27 shadow">
                <div className="flex flexNullCenter flex-end">
                  <div><img src={app.iconImage} alt="office" className="img-fluid" /></div>
                  <div className="font16 primaryColor">Live Incentives</div>
                </div>
                <div className="textCenter">
                  <img src={icon1} alt="office" className="img-fluid" />
                  <h3 className="font20 extraBold mb-0 bridge-title">{app.name}</h3>
                  <div>{app.url}</div>
                </div>
                <p className="bridge-txt" style={{ padding: "30px 0" }}>
                  {app.description}
                </p>
              </Wrapper>
            </div>
          ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
width: 100%;
text-align: left;
padding: 20px 30px;
margin-top: 30px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const WrapperBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  :hover {
    opacity: 0.5;
  }
`;
