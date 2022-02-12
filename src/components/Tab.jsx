import styled from "styled-components";
import React, { useState } from "react";

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

const Tab1 = () => {
  return <div>This is Tab1</div>;
};
const Tab2 = () => {
  return <div>This is Tab2</div>;
};
const Tab3 = () => {
  return <div>This is Tab3</div>;
};

const Tab = () => {
  const [tabs, addTabs] = useState(["Tab1", "Tab2", "Tab3"]);
  const [selectedTab, setTab] = useState("Tab1");

  const changeTab = (e) => {
    const tabId = document.getElementById(e.target.id);
    setTab(tabId.id);
  };

  const renderTabs = tabs.map((tabName, i) => {
    return (
      <TabForm key={i} id={tabName} onClick={(e) => changeTab(e)} selected={tabName === selectedTab ? true : false}>
        {tabName}
        <TabUnderLine />
      </TabForm>
    );
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <TabWrap>{renderTabs}</TabWrap>
      {selectedTab === "Tab1" ? <Tab1 /> : selectedTab === "Tab2" ? <Tab2 /> : <Tab3 />}
    </div>
  );
};

export default Tab;
