import { useState } from 'react';
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo(){
const [todo,setTodo] = useState('')
const [todos,setTodos] = useState([
    {
        id:1,
        text:"eat pig",
        completed:false
    }
])

return (
    <div className='container'>
        <div className='text-center'>
            <h1>Todolist</h1>
            <input type="text"
            value={todo}
            onChange={(e) => setTodo}
            />
        </div>
        
    </div>
)
}
export default Todo;