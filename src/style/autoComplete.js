import styled from "styled-components";

const ACInput = styled.input`
  height: 40px;
  padding: 5px 10px;

  &:focus {
    outline: none;
    border: 1.5px solid #916bff;
    border-radius: 2px;
  }
`;

const ACArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ACDataView = styled.div`
  overflow-y: scroll;
  height: 180px;
`;
const ACDataUl = styled.ul`
  list-style: none;
  padding-left: 0px;

  & > li {
  }
`;
const ACDataListItemForm = styled.li`
  display: flex;
  border-radius: 5px;
  height: 40px;
  align-items: center;

  &:hover {
    background: #d1c4f7;
    cursor: pointer;
  }
`;

export { ACArea, ACDataListItemForm, ACDataUl, ACDataView, ACInput };
