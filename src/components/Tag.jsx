import styled from "styled-components";
import React, { useState } from "react";
import Close from "../resource/close.png";

const TagInput = styled.input``;

const ContainerWrap = styled.div`
  width: 100%;
  margin: 40px;
  display: flex;
`;
const TagsForm = styled.div``;

const TagContainer = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;

  & > ${TagsForm} {
    padding: 5px;
    border: 1px solid #ccc;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > ${TagInput} {
    flex: 1;
    font-size: 14px;
    padding: 5px;
    outline: none;
    border: 0;
  }
`;

const Tag = () => {
  const [inputValue, setValue] = useState("");
  const [tags, setTags] = useState([]);

  const handleKeyPress = (e) => {
    let copyTags = [...tags];
    if (e.key === "Enter") {
      const tagsValue = document.getElementById("input-tag").value;
      copyTags.push(tagsValue);
      setTags(copyTags);
    }
  };
  const removeTag = (e) => {
    let copyTags = [...tags];
    console.log(e.target.parentElement);
    copyTags.splice(e.target.parentElement.id, 1);
    setTags(copyTags);
  };

  const renderTags = tags.map((tag, i) => {
    return (
      <TagsForm key={i} id={i}>
        {tag}
        <img src={Close} style={{ width: "10px", height: "10px", marginLeft: "8px" }} onClick={(e) => removeTag(e)} />
      </TagsForm>
    );
  });

  return (
    <ContainerWrap>
      <TagContainer>
        {/* <TagInput onKeyPress={handleKeyPress}></TagInput> */}
        {renderTags}
        <TagInput id="input-tag" placeholder="태그를 입력하세요." onKeyPress={handleKeyPress} />
      </TagContainer>
    </ContainerWrap>
  );
};

export default Tag;
