import Todo from "../todo/Todo";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import TodoForm from "../Todoform/TodoForm";
const TodoList = ({ todos, complteHandler,  onUpdateHandler  ,deleteHandler}) => {
 const[edit,setEdit]=useState({name:"",id:null,iscompleted:false})
 const editTodo=(newValue)=>{
  onUpdateHandler(edit.id,newValue);
  setEdit({name:"",id:null,iscompleted:false})
  console.log(edit.id,newValue);
 }
 const renderToddo=()=>{
 return todos.map((t) => {
    //  console.log(t.name)
    return (
      <div>
       
        <Todo
          todo={t}
          key={t.id}
          complteHandler={() => complteHandler(t.id)}
          editHandler={() => setEdit(t)}
          deleteHandler={() => deleteHandler(t.id)}
        />
        
    
      </div>
    )
    }  )
 };
  return (
    <div>
       {edit.id ? <TodoForm add={editTodo}  edit={edit}/> : renderToddo()
     
}
    </div>
  );

}
export default TodoList;
