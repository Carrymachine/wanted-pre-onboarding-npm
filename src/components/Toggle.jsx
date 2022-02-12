import styled from "styled-components";
import React, { useState } from "react";

const ToggleBtn = styled.input.attrs((props) => ({
  type: "checkbox",
}))`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + label {
    background: #9656c6;
  }
  &:checked + label:after {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;
const ToggleLabel = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 37px;
  height: 20px;
  background: grey;
  display: block;
  border-radius: 100px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }
  &:active:after {
    width: 18px;
  }
`;
const ToggleArea = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const Toggle = () => {
  const [isPlayable, setPlayable] = useState(false);

  const handleToggle = () => {
    const toggleStatus = document.getElementById("toggle");
    toggleStatus.checked = !isPlayable;
    setPlayable(!isPlayable);
  };
  return (
    <ToggleArea>
      <ToggleBtn id="toggle" defaultChecked={isPlayable} />
      <ToggleLabel onClick={() => handleToggle()}></ToggleLabel>
    </ToggleArea>
  );
};

export default Toggle;
