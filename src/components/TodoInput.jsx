import { useState } from "react";

function TodoInput({ onTodoAdd }) {
  const [InputText, setInputText] = useState("");

  const handleInput = (event) => {
    const value = event.target.value;
    setInputText(value);
  };

  const handleEnterKeyPress = (event) => {
    // enter 누르면 실행됨
    if (event.key === "Enter") {
      event.preventDefault(); // 기본 엔터 동작 방지 (옵션)
      onTodoAdd(InputText);
    }
  };

  const handleClick = () => {
    onTodoAdd(InputText);
    setInputText("");
  };

  return (
    <div>
      <input
        type="text"
        value={InputText}
        onChange={handleInput}
        onKeyPress={(e) => handleEnterKeyPress(e)}
      />
      <button onClick={handleClick}>add</button>
    </div>
  );
}

export default TodoInput;
