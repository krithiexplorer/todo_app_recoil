import {useState} from 'react'
import axios from 'axios';


export default function AddTodos() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  function createTodo()
  {
        axios.post("http://localhost:3000/addTodo",{
            title:title,
            description:description
        }).then(()=>{
            alert("Todo added successfully")
        })
  }

  return (
    <div>
        <input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder='enter title'/>
        <input type="text" onChange={(e)=>setDescription(e.target.value)} placeholder='enter description'/>
        <button type="submit" onClick={createTodo}>Create a Todo</button>
    </div>
  )
}
