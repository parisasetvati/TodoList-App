import { useEffect, useRef, useState } from "react";
import styles from "./TodoForm.module.css";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
const TodoForm = (props) => {
  const notify = () => toast("entet Todo!");
  const [todo, setTodo] = useState(props.edit ? props.edit.name :"");
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const changeHandler = (e) => {
    setTodo(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!todo) {
      alert("enter Todo....");
      return;
    }
    setTodo("");
    props.add(todo);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
          <>
            <input
              type="text"
              placeholder={props.edit ? "update To" :"input todo"}
              value={todo}
              onChange={changeHandler}
              ref={inputRef}
            ></input>
            <button className={styles.add} type="sumbmit">
            {props.edit ? "Update" :"Add"}
            </button>
          </>
        
      </form>
    </div>
  );
};

export default TodoForm;
