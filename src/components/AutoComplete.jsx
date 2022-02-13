import React, { useState, useEffect } from "react";
import { ACArea, ACDataListItemForm, ACDataUl, ACDataView, ACInput } from "../style/autoComplete";
const data = [
  {
    id: 0,
    category: "country",
    value: "united arab emirates",
    flag: "🇦🇪",
  },
  {
    id: 1,
    category: "country",
    value: "south korea",
    flag: "🇰🇷",
  },
  {
    id: 2,
    category: "country",
    value: "japan",
    flag: "🇯🇵",
  },
  {
    id: 3,
    category: "country",
    value: "south africa",
    flag: "🇿🇦",
  },
  {
    id: 4,
    category: "country",
    value: "south america",
    flag: "🇺🇸",
  },
  {
    id: 5,
    category: "country",
    value: "sweden",
    flag: "🇸🇪",
  },
  {
    id: 6,
    category: "country",
    value: "singapore",
    flag: "🇸🇬",
  },
  {
    id: 7,
    category: "country",
    value: "china",
    flag: "🇨🇳",
  },
  {
    id: 8,
    category: "country",
    value: "hongkong",
    flag: "🇭🇰",
  },
  {
    id: 9,
    category: "country",
    value: "jamaica",
    flag: "🇯🇲",
  },
  {
    id: 10,
    category: "country",
    value: "argentina",
    flag: "🇦🇷",
  },
  {
    id: 11,
    category: "country",
    value: "australia",
    flag: "🇦🇺",
  },
  {
    id: 12,
    category: "country",
    value: "canada",
    flag: "🇨🇦",
  },
  {
    id: 13,
    category: "country",
    value: "france",
    flag: "🇫🇷",
  },
];

const AutoComplete = () => {
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
