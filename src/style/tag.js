import styled from "styled-components";

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
  padding: 8px;
  border-radius: 3px;
  display: flex;
  flex-wrap: wrap;

  & > ${TagsForm} {
    padding: 5px;
    background: #fff;
    border: 2px solid #9656c6;
    border-radius: 5px;
    min-width: 40px;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #9656c6;
    font-weight: 600;
  }

  & > ${TagInput} {
    flex: 1;
    font-size: 14px;
    padding: 10px;
    outline: none;
    border: 0;
  }
`;

export { TagContainer, TagInput, TagsForm, ContainerWrap };
