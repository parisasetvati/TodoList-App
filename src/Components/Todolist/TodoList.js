import Todo from "../todo/Todo";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const TodoList = ({ todos, complteHandler, editHandler ,deleteHandler}) => {
  const notify = () => toast("add som todo!");
  return (
    <div>
      
      {todos.map((t) => {
        //  console.log(t.name)
        return (
          <div>
            <Todo
              todo={t}
              key={t.id}
              complteHandler={() => complteHandler(t.id)}
              editHandler={() => editHandler(t.id)}
              deleteHandler={() => deleteHandler(t.id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
