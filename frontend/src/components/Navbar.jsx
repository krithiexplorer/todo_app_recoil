import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
    <button onClick={()=>{navigate("/")}}>View Todos</button>
    <button onClick={()=>{navigate("/addTodos")}}>Add Todos</button>
    <button onClick={()=>{navigate("/filter")}}>Filter Todos</button>
    </>
  )
}
