function TodoList({ todos, onTodoRemove }) {
  return (
    <div>
      <ul>
        {todos.map((todo, idx) => {
          return (
            <li key={idx}>
              <span>{todo}</span>
              <button onClick={() => onTodoRemove(todo)}>remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
