import React, { useState } from "react";
import { Toggle, Modal, Tab, Tag, AutoComplete, ClickToEdit } from "./components/index";
import { Grid, CompViewer, ViewPlate } from "../src/style/App";
import data from "../src/resource/data";

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
          <AutoComplete data={data} />
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
