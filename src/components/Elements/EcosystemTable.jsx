import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets

export default function EcosystemTable({ icon, price, title, text,  offers, action }) {
  let getIcon;


  return (
    <Wrapper className="darkBg shadow whiteColor radius8">
      <div style={{ margin: "10px 0" }} className="textCenter">
        <h4 className="font30 extraBold" style={{ margin: "30px 0 0" }}>{title}</h4>
        <p className="font20 lineHeight30"  style={{ padding: "30px 30px 40px" }}>{text}</p>
      </div>
      <div style={{ maxWidth: "220px", margin: "30px auto 50px auto" }}>
        <FullButton title="View docs" action={action} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;
