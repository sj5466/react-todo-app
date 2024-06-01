import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function fetchTodos() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const value = localStorage.key(i);
    result.push(value);
  }

  return result;
}

function App() {
  const [todos, setTodos] = useState(fetchTodos());

  const addTodo = (todo) => {
    localStorage.setItem(todo, todo);

    /**
     *  아래 구문 todos.push(todo) 와 같은 효과를 가짐
     * react에서 사용하는 상태 변화값 감지 방법
     */
    setTodos((currentTodos) => {
      //기존 배열을 복사 후 추가된 값을 넣음
      return [...currentTodos, todo];
    });

    // input 창 초기화
    // setInputText("");
  };

  const removeTodo = (todo) => {
    /**
     * react 에서는 state 불변성으로 인해
     * 배열을 변경하면 안됨
     * todos.splice(idx, 1) 방법 대신
     * 아래와 같이 filter를 사용해서 새 배열로 반환해야함
     */
    const result = todos.filter((todoItem) => {
      if (todoItem !== todo) {
        return true;
      }
    });

    setTodos(result);
    localStorage.removeItem(todo);
  };

  return (
    <div>
      <TodoHeader />
      <TodoInput onTodoAdd={addTodo} />
      <TodoList todos={todos} onTodoRemove={removeTodo} />
    </div>
  );
}

export default App;
