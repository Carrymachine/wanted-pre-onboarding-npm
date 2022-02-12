import styled from "styled-components";

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

const ModalBtn = styled.button`
  background: #fff;
  border: 2px solid #a58af7;
  color: #a58af7;
  font-weight: bold;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  &:hover {
    background: #946fff;
    transition: 0.5s;
    color: #fff;
  }
`;

const Modals = styled.div`
  display: flex;
  width: 400px;
  height: 200px;
  background: #fff;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.15);
  align-items: center;

  flex-direction: column;
`;

export { ModalArea, ModalBtn, Modals };
