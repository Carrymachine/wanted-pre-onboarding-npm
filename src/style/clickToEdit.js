import styled from "styled-components";

const CTEInput = styled.input`
  width: 100%;
  height: 28px;
  border: 1px solid #a9a9a9;
  border-radius: 2px;
  padding 4px 16px 4px 8px;

  &:focus {
    outline: none;
    border: 1.5px solid #916bff;
    border-radius: 2px;
  }
`;
const CTEArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CTEContainer = styled(CTEArea)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 8px 0 8px 0;
`;
const CTEWrap = styled(CTEArea)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const CTELabel = styled.div`
  display: flex;
  width: 40px;
  text-align: center;
  margin-right: 8px;
`;

export { CTEArea, CTEContainer, CTEInput, CTEWrap, CTELabel };
