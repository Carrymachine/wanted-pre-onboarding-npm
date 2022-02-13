import React, { useState } from "react";
import Close from "../resource/close.png";
import { TagContainer, TagInput, TagsForm, ContainerWrap } from "../style/tag";

const Tag = () => {
  const [inputValue, setValue] = useState("");
  const [tags, setTags] = useState([]);

  const handleKeyPress = (e) => {
    let copyTags = [...tags];
    if (e.key === "Enter" || e.key === " ") {
      const tagsValue = document.getElementById("input-tag");
      copyTags.push(tagsValue.value);
      setTags(copyTags);
      tagsValue.value = "";
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
        <img src={Close} style={{ width: "10px", height: "10px", marginLeft: "8px", cursor: "pointer" }} onClick={(e) => removeTag(e)} />
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
