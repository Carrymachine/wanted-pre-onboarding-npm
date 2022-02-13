import styled from "styled-components";

const TagInput = styled.input``;

const ContainerWrap = styled.div`
  width: 100%;
  margin: 40px;
  height: 60px;
  display: flex;
`;
const TagsForm = styled.div``;

const TagContainer = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;

  & > ${TagsForm} {
    padding: 5px;
    background: #d2c4fb;
    border-radius: 5px;
    min-width: 40px;
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

export { TagContainer, TagInput, TagsForm, ContainerWrap };
