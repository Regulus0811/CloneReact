import React from "react";
import styled from "styled-components";
import ToDoItem from "./ToDoItem";

const ToDoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const ToDoList = () => {
  return (
    <ToDoListBlock>
      <ToDoItem text="프로젝트 생성하기" done={true} />
      <ToDoItem text="컴포넌트 스타일링하기" done={true} />
      <ToDoItem text="Context 만들기" done={false} />
      <ToDoItem text="기능 구현하기" done={false} />
    </ToDoListBlock>
  );
};

export default ToDoList;
