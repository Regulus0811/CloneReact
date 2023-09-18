import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import ToDoHead from "./components/ToDoHead";
import ToDoList from "./components/ToDoList";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <ToDoHead />
        <ToDoList />
      </TodoTemplate>
    </>
  );
}

export default App;
