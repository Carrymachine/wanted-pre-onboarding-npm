import React, { useState, useEffect } from "react";
import { ACArea, ACDataListItemForm, ACDataUl, ACDataView, ACInput } from "../style/autoComplete";

const AutoComplete = ({ data }) => {
  const [isValueExist, setToggle] = useState(false);
  const [editedData, setData] = useState([]);

  const editedCountry = () => {
    const inputValue = document.getElementById("auto-complete-input");

    const filterFirstChar = data.filter((country) => {
      return country.value.slice(0, inputValue.value.length) === inputValue.value.toLowerCase();
    });

    const filterCorrectWord = data.filter((country) => {
      return country.value.includes(inputValue.value.toLowerCase());
    });

    return filterFirstChar.length === 0 ? filterCorrectWord : filterFirstChar;
  };

  const clickResult = (e) => {
    const inputValue = document.getElementById("auto-complete-input");
    const resultValue = e.target.childNodes[1].textContent;
    inputValue.value = resultValue;
    setToggle(false);

    setData(
      editedCountry().sort((a, b) => {
        return a.value < b.value ? -1 : a.value > b.value ? 1 : 0;
      })
    );
  };

  const handleChange = () => {
    const inputValue = document.getElementById("auto-complete-input");
    inputValue.value !== "" ? setToggle(true) : setToggle(false);
    setData(
      editedCountry().sort((a, b) => {
        return a.value < b.value ? -1 : a.value > b.value ? 1 : 0;
      })
    );
  };

  const renderACData = editedData.map((country, i) => {
    return (
      <ACDataListItemForm key={i} id={i} onClick={(e) => clickResult(e)}>
        <div style={{ margin: "0 8px 0 8px" }}>{country.flag}</div>
        {country.value}
      </ACDataListItemForm>
    );
  });

  return (
    <ACArea>
      <ACInput id="auto-complete-input" onChange={handleChange} placeholder="나라를 검색하세요." />
      {isValueExist ? (
        <ACDataView>
          <ACDataUl>{renderACData}</ACDataUl>
        </ACDataView>
      ) : null}
    </ACArea>
  );
};

export default AutoComplete;
