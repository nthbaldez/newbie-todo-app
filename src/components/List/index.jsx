import styles from './styles.module.scss';

import { useState, useRef, useEffect } from 'react';
import { Todo } from '../Todo';

export function List() {

  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState("What's going on today?");
  const inputRef = useRef(null);

  const addTodo = () => {

    let obj = {
      content: inputRef.current.value,
      id: Math.ceil(Math.random() * (1000 - 1) + 1)
    }

    setTodos([...todos, obj]);
    
  }

  const removeTodo = (id) => {

    const removedTodo = todos.findIndex(todo => todo.id == id);

    const updatedTodos = [...todos];
    updatedTodos.splice(removedTodo, 1);

    setTodos(updatedTodos);

  }


  return (
    <div className={styles.listContainer}>
      <h1>TODO</h1>

      <div className={styles.userInput}>
        <button onClick={addTodo}type="radio">Add Todo</button>
        <input ref={inputRef} type="text" id="todo" name="todo" placeholder={message}/>
      </div>

      <ul>
        {
          todos.map((todo) => 
            <Todo 
              key={todo.id} 
              content={todo.content} 
              removeTodos={removeTodo} 
              id={todo.id}
            />
          )
        }
      </ul>
      
      <footer>
        <p>5 items</p>

        <div className={styles.filterTodos}>
          <p>All</p>
          <p>Active</p>
          <p>Completed</p>

        </div>

        <p>Clear Completed</p>
      </footer>
    </div>
  )
}