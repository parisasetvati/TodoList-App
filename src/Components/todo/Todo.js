import styles from "./Todo.module.css";

const Todo = ({todo,editHandler,complteHandler,deleteHandler}) => {
    return ( 
        <div className={styles.container}>
            <div  >
              <p className={todo.isCompleted ? "complte": ""}>TodoName : {todo.name}</p>
              </div>
              <div className={styles.btns}>
    <button className={styles.btn} onClick={editHandler}>Edit</button> 
    <button className={styles.btn} onClick={complteHandler}>Complete</button> 
    <button className={`${styles.delete} ${styles.btn}`} onClick={deleteHandler}>delete</button> 
    </div>

        </div>
     );
}
 
export default Todo;