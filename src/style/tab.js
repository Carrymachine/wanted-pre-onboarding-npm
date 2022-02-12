import styled from "styled-components";

const TabWrap = styled.div`
  display: flex;
`;
const TabUnderLine = styled.div`
  width: 100%;
  height: 1px;
  background: #000;
`;
const TabForm = styled.button`
  margin: 0 8px 24px 8px;
  border: none;
  background: #fff;
  align-text: center;
  color: ${(props) => (props.selected ? "#000" : "grey")};

  & > ${TabUnderLine} {
    background: ${(props) => (props.selected ? "#000" : "#fff")};
    transition: 0.5s;
  }
`;

export { TabForm, TabUnderLine, TabWrap };
