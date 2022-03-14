import TodoForm from "../Todoform/TodoForm";
import TodoList from "../Todolist/TodoList";
import styles from "./TodoApp.module.css";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addHandler = (input) => {
    //   console.log(todo);
    setTodos([
      ...todos,
      { name: input, id: todos.length + 1, isCompleted: false },
    ]);
  };
  const complteHandler = (id) => {
    console.log(id);
    const index = todos.findIndex((todo) => todo.id === id);
    const selectTodo = { ...todos[index] };
    selectTodo.isCompleted = !selectTodo.isCompleted;
    console.log(selectTodo);
    const updateTodos = [...todos];
    updateTodos[index] = selectTodo;
    setTodos(updateTodos);
  };
  const editHandler = (id) => {
    console.log(id);
  };
  const deleteHandler=(id)=>{
    console.log(id);
    const deleteItem=todos.filter((p)=> p.id!==id);
    setTodos(deleteItem);
  }
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <TodoForm add={addHandler} />
        <TodoList
          todos={todos}
          complteHandler={complteHandler}
          editHandler={editHandler}
          deleteHandler={deleteHandler}
        />
      </div>
    </>
  );
};

export default TodoApp;
