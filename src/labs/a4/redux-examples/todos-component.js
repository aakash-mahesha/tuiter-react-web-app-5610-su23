import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { addTodo, deleteTodo, todoDoneToggle} from "./reducers/todos-reducer";
const Todos = () => {
 const todos= useSelector(state => state.todos);
 const [todo, setTodo] = useState({do: ''});
 const dispatch = useDispatch();
 const createTodoClickere = () =>{
    dispatch(addTodo(todo))
    setTodo({do:''})
 }
 const todoChangeHandler = (event) => {
    const doValue = event.target.value;
    const newTodo = {
        do: doValue
    }
    setTodo(newTodo);
 }
 const deleteTodoClickHandler = (index) =>{
    dispatch(deleteTodo(index))
 }
 const toggleTodoDone = (todo) => {
    dispatch(todoDoneToggle(todo))
 }
 return(
   <>
     <h3>Todos</h3>
     <ul className="list-group">
        <li className="list-group-item">
            <button onClick={createTodoClickere}
                className="btn btn-primary w-25 float-end">Create</button>
            <input onChange={todoChangeHandler}
            value={todo.do} className="form-control w-75"/>
        </li>
       {
         todos.map((todo,index) =>
           <li className="list-group-item">
            <button onClick={() =>
            deleteTodoClickHandler(index)}
            className="btn btn-danger float-end ms-2">Delete</button>
            <input type="checkbox" className="me-2"
                checked={todo.done}
                onChange={() =>
                toggleTodoDone(todo)}/>
             {todo.do}
           </li>)
       }
     </ul>
   </>
 );
};
export default Todos;