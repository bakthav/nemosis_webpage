import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border, borderLight }) {
  return (
    <Wrapper
      className="animate pointer radius10"  border={border} borderLight={borderLight}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#FF0420" : "#FF0420" || props.borderLight ? "transparent" : "#fff")};
  background-color: ${(props) => (props.border ? "transparent" : "#FF0420")};
  width: 100%;
  padding: 18px 32px;
  font-size:16px;
  outline: none;
  color: ${(props) => (props.border ? "#FF0420" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#F5F5F5")};
    border: 1px solid #FF0420;
    color: ${(props) => (props.border ? "#FF0420" : "#FF0420")};
  }
`;

