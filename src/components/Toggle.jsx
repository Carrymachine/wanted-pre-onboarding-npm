import styled from "styled-components";
import React, { useState } from "react";
import { ToggleBtn, ToggleLabel, ToggleArea } from "../style/toggle";

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
