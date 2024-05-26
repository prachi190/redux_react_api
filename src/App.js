import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './redux/todoSlice';
import { useEffect } from 'react';
import './App.css';
import TodoChart from './TodoChart';
import TodoTable from './TodoTable';

function App() {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((state) => state.todo);


  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);


  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred!</div>;

  return (
    // <div>
    //   <h1>Todo List</h1>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>ID</th>
    //         <th>Title</th>
    //         <th>Completed</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {data.map((todo) => (
    //         <tr key={todo.id}>
    //           <td>{todo.id}</td>
    //           <td>{todo.title}</td>
    //           <td>{todo.completed ? 'Yes' : 'No'}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    //   <TodoChart todos={data} />
    // </div>

    <div>
      <h1>Todo List</h1>
      <TodoTable todos={data} />
      <TodoChart todos={data} />
    </div>
    
  );
}

export default App;