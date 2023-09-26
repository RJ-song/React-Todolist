import './App.css';
import { useState, useTransition } from 'react';
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [todo,setTodo] =useState('');
  const [todos,setTodos] = useState([
    {
      id:1,
      text:"交作業",
      completed:false
    }
  ])
  const handleAdd = () =>{
    const newTodos=[...todos,{
      id:todos.length+1,
      text:todo,
      completed:false
    }]
    setTodos(newTodos);
    setTodo('');
  }
  const handleDelete= (id) =>{
    const newTodos = [...todos];
    const index = todos.findIndex((x) => x.id === id);
    newTodos.splice(index,1);
    setTodos(newTodos);
  }
  const handleComplete= (id) =>{
    const newTodos = [...todos];
    const index = todos.findIndex((x) => x.id === id);
    newTodos[index].completed=true;
    setTodos(newTodos);
  }
  return (
    <div className='container'>
        <div className='text-center'>
          <h1>TodoList</h1>
          <input type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={(e) => {
            if(e.key === 'Enter'){
              handleAdd()
            }
          }}
          />
          <Button onClick={handleAdd} variant='primary'>Add</Button>
          <table className='table'>
            <thead>
              <tr className='row'>
                <th className='col-1'>No.</th>
                <th className='col-7'>待辦事項</th>
                <th className='col-2'>狀態</th>
                <th className='col-2'>設定</th>
              </tr>
            </thead>
            <tbody>
              {
                todos.map((item,index) => <tr className='align-middle row'>
                  <th className='col-1'>{index+1}</th>
                  <td className='col-7'>{item.text}</td>
                  <td className='col-2'>{item.completed ? <>已完成</> : <>未完成</>}</td>
                  <td className='col-2'>
                    {!item.completed ? <Button onClick={() => handleComplete(item.id)} variant='dark' className='me-3'>Complete</Button> : <></>}
                    <Button onClick={() => handleDelete(item.id)} variant='danger'>Delete</Button>
                  </td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
    </div>
  );
}

export default App;
