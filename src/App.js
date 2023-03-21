import { useState } from "react";

function App() {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])

  const handleAdd = (event) => {
    event.preventDefault();
    setTodos((todos) => [...todos, { id: new Date().getTime(), content: input, isCompleted: false }])
    setInput("")
  }

  const handleRemove = (index) => {
    setTodos(
      (todos) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1)
        return newTodos
      }
    )
  }

  return (
    <div>
      <form onSubmit={handleAdd}>
        <input required type="text" value={input} onChange={(event) => setInput(event.target.value)} />
        <button type="submit">ADD</button>
      </form>
      <div>
        {todos.map((item, index) =>
          <div key={item.id}>
            <input type="checkbox" value={item.isCompleted} />{item.content}
            <button onClick={() => handleRemove(index)}>X</button>
          </div>)}
      </div>
    </div>
  )

}

export default App;
