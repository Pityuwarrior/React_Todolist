import { TodoItem } from "./TodoItem"
import {Todo} from "./App"

type PostProps = {
    todos: Todo[],
    toggleTodo: Function,
    deleteTodo: Function
}

//Checking if the todos contains any value if yes then it's listing the list's values.
export function TodoList( {todos, toggleTodo, deleteTodo}: PostProps ) {
    return(
        <ul className="list">
            {todos.length === 0 && "No Todos"/*Short circuiting */} 
            {todos.map((todo)=> {
                return( 
                <TodoItem 
                    {...todo} 
                    key={todo.id} 
                    toggleTodo={toggleTodo} 
                    deleteTodo={deleteTodo}
                />
                ) 
            })}       
        </ul>
    )
}