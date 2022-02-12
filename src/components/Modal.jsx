import React, { useState } from "react";
import Close from "../resource/close.png";
import { ModalArea, ModalBtn, Modals } from "../style/modal";

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
