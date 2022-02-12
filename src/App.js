import styled from "styled-components";
import React, { useState } from "react";
import { Toggle, Modal, Tab, Tag, AutoComplete, ClickToEdit } from "./components/index";
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

function App() {
  return (
    <Grid>
      <CompViewer>
        <h2>Toggle</h2>
        <ViewPlate>
          <Toggle />
        </ViewPlate>
      </CompViewer>
      <CompViewer>
        <h2>Modal</h2>
        <ViewPlate>
          <Modal />
        </ViewPlate>
      </CompViewer>
      <CompViewer>
        <h2>Tab</h2>
        <ViewPlate>
          <Tab />
        </ViewPlate>
      </CompViewer>
      <CompViewer>
        <h2>Tag</h2>
        <ViewPlate style={{ width: "400px" }}>
          <Tag />
        </ViewPlate>
      </CompViewer>
      <CompViewer>
        <h2>Auto Complete</h2>
        <ViewPlate style={{ width: "400px" }}>
          <AutoComplete />
        </ViewPlate>
      </CompViewer>
      <CompViewer>
        <h2>Click To Edit</h2>
        <ViewPlate style={{ width: "400px" }}>
          <ClickToEdit />
        </ViewPlate>
      </CompViewer>
    </Grid>
  );
}

export default App;
