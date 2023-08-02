import { useState, useEffect } from "react"
import { NewTodoForm } from "./NewTodoForm"
import "./style.css"
import { TodoList } from "./TodoList"

export interface Todo{
  id: string
  title: string
  completed: boolean
}

export default function App(){

  //This hooks creats a todos list that's going to be filled with values from the "ITEM" json if it's not null
  const [todos, setTodos] = useState<Todo[]>(() =>{
    const localValue = localStorage.getItem("ITEM")
    if  (localValue == null) return []

    return JSON.parse(localValue)
  });

  //Every time todos changes the values will be stored in the "ITEMS" json file
  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos))
  },[todos])
  
  //OnSubmit getting the values from NewTodoForm and adding to the list
  function addTodo(title: string){
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false},
      ]
    })
  }

  //On click mapping the selected item's id and setting the completed value to true or false dippending on the original value.
  function toggleTodo(id: string, completed: boolean){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }

        return todo
      })
    })
  }

  //Deleting the selected list item.
  function deleteTodo(id: string){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  //Importing the funtions for the frontend
  return (
    <>  
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}