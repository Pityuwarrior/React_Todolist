interface Props{
  completed: boolean,
  id: string, 
  title: string, 
  toggleTodo: Function, 
  deleteTodo: Function
}

//Sending the values to the toggleTodo and deleteTodo when changes occur on the listed items
export function TodoItem({completed, id, title, toggleTodo, deleteTodo}: Props){
  return (
    <li>
      <label>
        <input
          type="checkbox" 
          checked={completed} 
          onChange={e => toggleTodo(id, e.target.checked)} 
        />
        {title}
      </label>
      <button
        onClick={() => deleteTodo(id)}  
        className="btn btn-danger">Delete
      </button>
    </li>)   
}