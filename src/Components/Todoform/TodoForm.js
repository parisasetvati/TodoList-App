import { useState } from "react";
import styles from "./TodoForm.module.css";
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
const TodoForm = (props) => {
  const notify = () => toast("entet Todo!");
    const [todo, setTodo] = useState("");
    const changeHandler = (e) => {
        setTodo(e.target.value);
      };
      const submitHandler=(e) =>{
        
 e.preventDefault();
 if(!todo)
 {alert("enter Todo....");
 return;
 
 
      }
setTodo("");
props.add(todo);
    
      }
  return (
    <div>
        <form onSubmit={submitHandler}>
        <input
        type="text"
        placeholder="todo..."
       value={todo}
        onChange={changeHandler}
      ></input>
      <button className={styles.add} type="sumbmit"  >Add </button>
     
     </form>
    </div>
  );
};

export default TodoForm;
