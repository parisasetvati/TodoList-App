import TodoForm from "../Todoform/TodoForm";
import TodoList from "../Todolist/TodoList";
import styles from "./TodoApp.module.css";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
const TodoApp = () => {
 
  const [todos, setTodos] = useState([]);
  const [filteTodos, setFilterTodos] = useState([]);

  const[select,setSelect]=useState("All")
  const changeHandler=(e)=>{
      setSelect(e.value);
      filterTodo(e.value)
  }
  const addHandler = (input) => {
    //   console.log(todo);
    setTodos([
      ...todos,
      { name: input, id: todos.length + 1, isCompleted: false },
    ]);
  };
  useEffect(()=>{filterTodo(select)},[select,todos])
 
  
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

  const deleteHandler = (id) => {
    console.log(id);
    const deleteItem = todos.filter((p) => p.id !== id);
    setTodos(deleteItem);
  };
  const onUpdateHandler = (id, newValue) => {
    console.log(id, newValue);
    const index = todos.findIndex((todo) => todo.id === id);
    const selectTodo = { ...todos[index] };
    selectTodo.name = newValue;
    console.log(selectTodo.name);
    const updateTodos = [...todos];
    updateTodos[index] = selectTodo;
    setTodos(updateTodos);
  };
  const filterTodo = (select) => {
    console.log(select);
    switch (select) {
      case "All":
        setFilterTodos(todos);
        break;
      case "Complete":
        setFilterTodos(todos.filter((t) => t.isCompleted));
        break;
      case "unComplete":
        setFilterTodos(todos.filter((t) => !t.isCompleted));
        break;
        default: setFilterTodos(todos)
    }
  };
  return (
    <>
      <Navbar
        unComplete={todos.filter((t) => !t.isCompleted).length}
        select={select} 
        onchange={changeHandler}
      />
      <div className={styles.container}>
        <TodoForm add={addHandler} />
        <TodoList
          todos={filteTodos}
          complteHandler={complteHandler}
          onUpdateHandler={onUpdateHandler}
          deleteHandler={deleteHandler}
        />
      </div>
    </>
  );
};

export default TodoApp;
