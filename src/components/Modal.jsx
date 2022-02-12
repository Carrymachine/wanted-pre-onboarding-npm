import styled from "styled-components";
import React, { useState } from "react";
import Close from "../resource/close.png";
const ModalArea = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.6);
  z-index: 99;
  overflow: hidden;
`;

const ModalBtn = styled.button``;

const Modals = styled.div`
  display: flex;
  width: 400px;
  height: 200px;
  background: #fff;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.15);
  align-items: center;

  flex-direction: column;
`;

const Modal = () => {
  const [isOpen, setToggle] = useState(false);

  return (
    <>
      {isOpen ? (
        <ModalArea>
          <Modals>
            <img src={Close} style={{ width: "14px", height: "14px", marginTop: "8px" }} onClick={() => setToggle(!isOpen)} />
            <div style={{ display: "flex", flexDirection: "center", alignItems: "center", height: "100%" }}>오늘 하루도 화이팅</div>
          </Modals>
        </ModalArea>
      ) : null}
      <ModalBtn onClick={() => setToggle(!isOpen)}>Open Modal</ModalBtn>
    </>
  );
};

export default Modal;
