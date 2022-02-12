import styled from "styled-components";

const CTEInput = styled.input``;
const CTEArea = styled.div`
  display: flex;
  flex-direction: column;
`;
const CTEContainer = styled(CTEArea)`
  flex-direction: row;
`;
const CTEWrap = styled(CTEArea)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export { CTEArea, CTEContainer, CTEInput, CTEWrap };
