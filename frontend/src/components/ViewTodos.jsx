import React, { useEffect } from 'react'
import { TodoAtom } from '../store/atoms/TodoAtom'
import { useRecoilState } from "recoil";
import axios from 'axios'; 

export default function ViewTodos() {
    const [todos,setTodos] = useRecoilState(TodoAtom);

    useEffect(()=>{
        axios.get("http://localhost:3000/todos").then((response)=>{
            setTodos(response.data.todos)
        })
    },[todos])

    return (
        <div>
            {todos.map((todo)=>{
                return <>
                    <h1>{todo.title}</h1>
                    <p>{todo.description}</p>
                </>
            }
            )}
        </div>
    )
}
