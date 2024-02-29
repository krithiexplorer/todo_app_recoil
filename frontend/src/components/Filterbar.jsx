import React from 'react'
import { FilterAtom } from '../store/atoms/FilterAtom'
import { FilterSelector } from '../store/selectors/FilterSelector'
import { useRecoilState, useRecoilValue } from 'recoil'

export default function Filterbar() {
   const [filterValue, setFilterValue] = useRecoilState(FilterAtom)
   const filteredTodos = useRecoilValue(FilterSelector);
   function generateTodos()
   {
      return <>
      {filteredTodos.map((todo)=>{
         return (
          <>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
          </>
         )
      }
      )}
      </>
   }
  return (
    <div>
        <input type="text" placeholder='Filter your todos' onChange={(e)=>setFilterValue(e.target.value)}/>
        <div>
        {generateTodos()}
        </div>
    </div>
  )
}
