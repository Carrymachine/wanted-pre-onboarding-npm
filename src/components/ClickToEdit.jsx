import React, { useState, useEffect } from "react";
import { CTEArea, CTEContainer, CTEInput, CTEWrap } from "../style/clickToEdit";

const ClickToEdit = () => {
  const [name, setName] = useState("김코딩");
  const [age, setAge] = useState("20");

  const [info, setInfo] = useState({ name: name, age: age });

  const handleChange = (e) => {
    console.log(e.target);
    switch (e.target.id) {
      case "input-name":
        setName(e.target.value);
        break;
      case "input-age":
        setAge(e.target.value);
        break;
    }
  };

  const handleClick = () => {
    setInfo({ name: name, age: age });
  };

  return (
    <CTEWrap onMouseUp={handleClick}>
      <CTEArea>
        <CTEContainer>
          이름 : <CTEInput id="input-name" onChange={(e) => handleChange(e)} defaultValue={info.name} />
        </CTEContainer>

        <CTEContainer>
          나이 : <CTEInput id="input-age" onChange={(e) => handleChange(e)} defaultValue={info.age} />
        </CTEContainer>
        <div style={{ marginTop: "16px" }}>
          이름 {info.name} 나이 {info.age}
        </div>
      </CTEArea>
    </CTEWrap>
  );
};

export default ClickToEdit;
