import React, { useState } from "react";
import Close from "../resource/close.png";
import { ModalArea, ModalBtn, Modals, ModalCloseBtn } from "../style/modal";

const Modal = () => {
  const [isOpen, setToggle] = useState(false);
  const body = document.querySelector("body");

  if (isOpen) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "";
  }

  return (
    <>
      {isOpen ? (
        <ModalArea>
          <Modals>
            <div style={{ display: "flex", flexDirection: "center", alignItems: "center", height: "100%" }}>오늘 하루도 화이팅</div>
            <ModalCloseBtn onClick={() => setToggle(!isOpen)}>Close</ModalCloseBtn>
          </Modals>
        </ModalArea>
      ) : null}
      <ModalBtn onClick={() => setToggle(!isOpen)}>Open Modal</ModalBtn>
    </>
  );
};

export default Modal;
