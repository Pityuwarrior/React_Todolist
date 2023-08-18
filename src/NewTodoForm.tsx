import { useState } from "react"


export function NewTodoForm({ onSubmit }: {onSubmit: Function}){
    
    const [newItem, setNewItem] = useState<string>("")

    //Running the function when the form gets a submit
    //If the given string is not empty, then it's sending it foward to the addTodo function
    function handleSubmit(e: any) {
        e.preventDefault()/*Preventing the page from refreshing*/
        if (newItem === "") return

        onSubmit(newItem)

        setNewItem("")
    }
    return(
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
            <label htmlFor="item">New Task</label>
            <input 
                value={newItem} 
                onChange={e => setNewItem(e.target.value)} 
                type="text" 
                id="item"
            /> 
            </div>
            <button className="btn">Add Task</button>
        </form>
    )
}