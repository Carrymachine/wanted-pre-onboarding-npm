import styled from "styled-components";

const Grid = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-rows: minmax(350px, 320px);
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 40px;
`;

const CompViewer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 16px 0 16px;
  flex-direction: column;
`;
const ViewPlate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.15);
  margin-top: 40px;
  border-radius: 10px;
  padding: 16px;
`;

export { Grid, CompViewer, ViewPlate };
