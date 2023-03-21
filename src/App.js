import { useEffect, useState } from "react";
import './index.css';

function App() {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')))

  const handleAdd = (event) => {
    event.preventDefault();
    setTodos((todos) => [...todos, { id: new Date().getTime(), content: input, isCompleted: false }])
    setInput("")
  }

  const handleRemove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id))
  }
  
  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify([...todos]))
  }, [todos])


  return (
    <div className="todo-app">
      <h1>Windows 1.0 BIOS</h1>
      <form onSubmit={handleAdd}>
        <input required type="text" value={input} onChange={(event) => setInput(event.target.value)} placeholder='type todo...'/>
        <button type="submit">ADD</button>
      </form>
      <div className="todo-list-container">
        <div className="todo-list-wrapper">
          <div className="todo-list">
            {todos.map((item) =>
              <div key={item.id} className='todo'>
                <div className="todo-content">
                  <input type="checkbox" value={item.isCompleted} />
                  <h3>{item.content}</h3>
                  <button onClick={() => handleRemove(item.id)}>X</button>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
